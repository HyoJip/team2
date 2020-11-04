<%@page import="com.team2.airbnb.model.RoomPhoto"%>
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
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=25b83b5f3784e4ed2c019239eb54b791&libraries=services"></script>
</head>
<body>
	<jsp:include page="../partial/header.jsp" />
<%
	Pagination pagination = (Pagination) request.getAttribute("pagination");
	ArrayList<RoomVO> rooms = (ArrayList<RoomVO>) request.getAttribute("rooms");
	RoomPhoto[] roomPhotosArray = (RoomPhoto[]) request.getAttribute("roomPhotos");
%>
	<div class="wrap">
		<main class="main_wrap">
			<section class="search_result">
				<small><span class="search_count">${pagination.listCnt}</span>개의 숙소</small>
				<h1 class="header_title">${empty keyword? "모든 지역": keyword}의 숙소</h1>
			</section>
			<section class="room_list" id="roomList">
	<%
				for(int i = 0; i < rooms.size(); i++) {
					RoomVO room = rooms.get(i);
					RoomPhoto roomPhoto = roomPhotosArray[i];
	%>
				<article class="room_item" data-roomid=<%=room.getId()%>>
					<div class="item_left_wrap">
						<div class="item_left">
						<%
							for (String imgSRC : roomPhoto.getFiles()) {
								if(imgSRC == null) break;
						%>
							<div class="image_box">
								<img
									src="/upload/<%=imgSRC%>"
									alt="숙소 이미지"
									class="room_photo"
								/>
							</div>
						<%		
								}
						%>
						</div>
						<i class="fas fa-angle-left"></i>
						<i class="fas fa-angle-right"></i>
						<div class="bottom_btn_wrap">
							<%
								for (int j = 0; j < roomPhoto.getFiles().length; j++) {
									if(roomPhoto.getFiles()[j] == null) break;
							%>
								<div class="circle_mark <%=j==0?"now":""%>"></div>
							<%
								}
							%>
						</div>
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
				<section class="pagination">
					<div class="page_btns">
					<%
						if (pagination.isPrev()) {
					%>
						<button id="prevBtn"><a href="<%= pagination.getPrevUrl(pagination.getPage(), pagination.getRange())%>"><i class="fas fa-angle-left"></i></a></button>
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
								: "<a href='?page="+ i + "&range=" + pagination.getRange() + "&roomId=" + rooms.get(rooms.size()-1).getId() + "'>" + i + "</a>"%>
						</span>			
					<%
						}
					%>
					<%
						if (pagination.isNext()) {
					%>
						<button id="nextBtn"><a href="<%= pagination.getNextUrl(pagination.getPage(), pagination.getRange())%>"><i class="fas fa-angle-right"></i></a></button>
					<%
						}
					%>
					</div>
					<small class="page_detail">숙소 
						<span class="page_count">${pagination.listCnt}</span>개 중
						<span>${pagination.startList}</span>-<span>${pagination.page eq pagination.endPage
																? pagination.listCnt
																: pagination.startList + pagination.listSize - 1}</span>
					</small>
				</section>
			</section>
		</main>
		<aside class="map_wrapper">
			<div class="map_relative">
				<div class="map_sticky">
					<div class="map" id="map"></div>
				</div>
			</div>
		</aside>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/roomList.js"></script>
</body>
</html>