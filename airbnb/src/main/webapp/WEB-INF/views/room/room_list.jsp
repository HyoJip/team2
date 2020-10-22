<%@page import="com.team2.airbnb.util.Pagination"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.team2.airbnb.model.vo.RoomVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에어비앤비 | 숙소 검색</title>
<link rel="stylesheet" href="/resources/css/base.css" />
</head>
<body>
	<jsp:include page="../partial/header.jsp" />
<%
	ArrayList<RoomVO> rooms = (ArrayList<RoomVO>) request.getAttribute("rooms");
	Pagination pagination = (Pagination) request.getAttribute("pagination");	
%>
	<main class="main_wrap">
		<section class="search_result">
			<small><span class="search_count">${pagination.listCnt}</span>개의 숙소</small>
			<h1 class="header_title">${empty keyword? "모든 지역": keyword}의 숙소</h1>
		</section>
		<section class="room_list" id="roomList">
<%
			for(RoomVO room: rooms) {
%>
			<article class="room_item" data-roomid=<%=room.getId()%>>
				<div class="item_left">
					<img src="https://i.pinimg.com/564x/16/c6/1b/16c61bcd0bdd4eed5f341fe7a5c7ae0f.jpg">
				</div>
				<div class="item_right">
					<p class="room_address"><%=room.getAddress()%></p>
					<h2 class="room_name"><%=room.getName()%></h2>
					<p class="room_facility">최대인원 <%=room.getGuests()%>명 · 침실
						<%=room.getBedRooms()%>개 · 침대 <%=room.getBeds()%>개 · 욕실 <%=room.getBaths()%>개</p>
					<p class="room_amenity">주방 · 무선 인터넷 · 건물 내 무료 자차 · 에어컨</p>
					<div class="rating">
	<%
				if (room.getReviewAvg() != 0) {
	%>
						<small class="room_short_info">
							<i class="star">★</i> <%=room.getReviewAvg()%>
							<span class="rating_count">(<%=room.getReviewCount()%>)</span>
						</small>
					</div>
	<%
			}
	%>
				</div>
			</article>		
<%	
		}
%>
		</section>
		<section class="pagination">
			<div class="page_btns">
			<%
				if (pagination.isPrev()) {
			%>
				<button id="prevBtn"><a href="<%=pagination.getPrevUrl(pagination.getPage(), pagination.getRange())%>"><i class="fas fa-angle-left"></i></a></button>
			<%
				}
			%>
			<%
				for (int i = pagination.getStartPage(); i <= pagination.getEndPage(); i++) {
			%>
				<span class="page_num <%=pagination.getPage() == i
									? "cur_page"
									: ""%>">
				<%= pagination.getPage() == i
						? i
						: "<a href='/room?page="+ i + "&range=" + pagination.getRange() + "'>" + i + "</a>"%>
				</span>			
			<%
				}
			%>
			<%
				if (pagination.isNext()) {
			%>
				<button id="nextBtn"><a href="<%=pagination.getNextUrl(pagination.getPage(), pagination.getRange())%>"><i class="fas fa-angle-right"></i></a></button>
			<%
				}
			%>
			</div>
			<small class="page_detail">숙소 <span class="page_count">${pagination.listCnt}</span>개 중 <span>${pagination.startList}</span>-<span>${!pagination.next? pagination.listCnt: pagination.startList + pagination.listSize - 1}</span></small>
		</section>
	</main>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/roomList.js"></script>
</body>
</html>