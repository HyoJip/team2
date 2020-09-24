<%@page import="com.team2.airbnb.util.NumberUtil"%>
<%@page import="com.team2.airbnb.util.DateUtil"%>
<%@page import="com.team2.airbnb.model.RoomReserve"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에어비앤비 | 예약 상세</title>
<link href="/resources/css/base.css" rel="stylesheet">
</head>
<body>
<%
	RoomReserve reserve = (RoomReserve) request.getAttribute("reserve");
%>
<jsp:include page="../partial/header.jsp" />
	<div class="wrap">
		<header class="header">
			<h1 class="header_title">예약 상세</h1>
		</header>
		<article class="reserve">
			<main class="main">
				<h2 class="room_name"><%=reserve.getName()%></h2>
				<h3 class="room_address"><%=reserve.getCity() + " " + reserve.getAddress()%></h3>
				<div class="reserve_time_wrap">
					<div class="reserve_time">
						<h4 class="reserve_check"><%=DateUtil.formatKor(reserve.getCheckIn())%></h4>
						<small class="room_check">체크인 시간: <%=reserve.getRoomCheckIn()%>:00</small>
					</div>
					<i class="fas fa-angle-right"></i>
					<div class="reserve_time">
						<h4 class="reserve_check"><%=DateUtil.formatKor(reserve.getCheckOut())%></h4>
						<small class="room_check">체크아웃 시간: <%=reserve.getRoomCheckOut()%>:00</small>
					</div>
					<div class="reserve_detail">
						<p class="reserve_night"><%=DateUtil.getDateDiff(reserve.getCheckIn().toString(), reserve.getCheckOut().toString())%>박</p>
						<p class="reserve_guests">인원 <%=reserve.getGuests()%>명</p>
					</div>
				</div>
				<div class="icons">
					<i class="far fa-comment-dots"></i><span>메시지 보내기</span>
					<i class="far fa-calendar-times"></i><span>변경 또는 취소</span>
				</div>
			</main>
			<aside class="aside">
				<div class="bills">
					<small class="room_detail"><span class="beds">침대 <%=reserve.getBeds()%></span>개 · 침실 <span class="bedrooms"><%=reserve.getBedrooms()%></span>개 · 화장실 <span class="baths"><%=reserve.getBaths()%>개</span></small>
					<h5 class="price"><%=NumberUtil.wonFormatter.format(reserve.getPrice() + 5000)%></h5>
					<h2 class="status <%=reserve.getStatus()%>"><%=reserve.getStatus().getName()%></h2>
				</div>
			</aside>
		</article>
		<footer class="footer">
			<section class="reserve_change">
				<i class="fas fa-home"></i>
				<h3 class="footer_title">예약 변경</h3>
				<p class="footer_body">날짜나 숙박 인원 변경 요청하기</p>
				<button onclick="document.location.href='./<%=reserve.getId()%>/update'">다음</button>
			</section>
			<section class="reserve_cancel">
				<i class="fas fa-ban"></i>
				<h3 class="footer_title">예약 취소하기</h3>
				<p class="footer_body">예약이 최종적으로 취소되기 전에 모든 내용을 검토할 수 있습니다.</p>
				<button onclick="document.location.href='./<%=reserve.getId()%>/cancel'">다음</button>
			</section>
		</footer>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/reserveDetail.js"></script>
</body>
</html>