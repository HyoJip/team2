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
%>
	<main class="main_wrap">
		<section class="search_result">
			<small><span class="search_count"><%=rooms.size()%></span>개의 숙소</small>
			<h1 class="header_title">${keyword}의 숙소</h1>
		</section>
		<section class="room_list">
<%
			for(RoomVO room: rooms) {
%>
			<article class="room_item">
				<div class="item_left">
					<img src="">
				</div>
				<div class="item_right">
					<p class="room_address"><%=room.getAddress()%></p>
					<h2 class="room_name"><%=room.getName()%></h2>
					<p class="room_facility">최대인원 <%=room.getGuests()%>명 · 침실
						<%=room.getBedRooms()%>개 · 침대 <%=room.getBeds()%>개 · 욕실 <%=room.getBaths()%>개</p>
					<p class="room_amenity">주방 · 무선 인터넷 · 건물 내 무료 자차 · 에어컨</p>
				</div>
				<div class="rating">
<%
			if (room.getReviewAvg() != 0) {
%>
					<small class="room_short_info">
						<i class="star">★</i> <%=room.getReviewCount()%>
						<span class="rating_count">(<%=room.getReviewAvg()%>)</span>
					</small>
				</div>
			</article>		
<%
			}
		}
%>
		</section>
		<section class="pagination">
			<div class="page_btns">
			<button class="prev_btn">&lt;</button>
			<span class="cur_page_num">1</span>
			<button class="prev_btn">&gt;</button>
			</div>
			<small class="page_detail">숙소 <span class="page_count"></span>개 중 <span>%CUR_PAGE_FIRST%</span>-<span>%CUR_PAGE_LAST%</span></small>
		</section>
	</main>
	<jsp:include page="../partial/footer.jsp" />
</body>
</html>