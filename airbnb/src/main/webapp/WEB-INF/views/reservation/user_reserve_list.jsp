<%@page import="com.team2.airbnb.util.DateUtil"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="java.util.stream.Collector"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.Collection"%>
<%@page import="java.time.LocalDate"%>
<%@page import="com.team2.airbnb.model.vo.ReserveVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="/resources/css/base.css" rel="stylesheet">
<title>에어비앤비 | 예약목록</title>
</head>
<body>
<%
	List<ReserveVO> reserves = (ArrayList<ReserveVO>) request.getAttribute("rooms");
	List<ReserveVO> upcoming = new ArrayList<ReserveVO>();
	List<ReserveVO> past =  new ArrayList<ReserveVO>();
	for (ReserveVO reserve: reserves) {
		if (reserve.getCheckIn().isAfter(LocalDate.now())) {
	upcoming.add(reserve);
		} else {
	past.add(reserve);
		}
	}
%>
	<%@ include  file="../partial/header.jsp"%>
	<div class="wrap">
		<section class="trip_before">
			<header class="header">
				<h1 class="header_title">예정된 일정</h1>
			</header>
			<main class="main">
			<%
				for (ReserveVO reserve: upcoming) {
			%>
				<article class="article_wrap">
					<a class="article_img_wrap" href="/room/<%=reserve.getRoomId()%>"><img class="article_img" alt="숙소 이미지" src="https://i.pinimg.com/564x/16/c6/1b/16c61bcd0bdd4eed5f341fe7a5c7ae0f.jpg"></a>
					<div class="article_info">
						<small class="reservation_dates"><%=DateUtil.formatKor(reserve.getCheckIn())%> - <%=DateUtil.formatKor(reserve.getCheckOut())%></small>
						<h3 class="room_name"><%=reserve.getName()%></h3>
						<p class="room_city"><%=reserve.getCity()%> <span class="status <%=reserve.getStatus()%>"><%=reserve.getStatus().getName()%></span></p>
						<a class="reservation_deatil" href="./reservations/<%=reserve.getId()%>">여행 세부사항 보기</a>
					</div>
				</article>			
			<%
							}
						%>
			</main>		
		</section>
		<section class="trip_after">
			<header class="header">
				<h1 class="header_title">지난 일정</h1>
			</header>
			<main class="main">
			<%
				for (ReserveVO reserve: past) {
			%>
				<article class="article_wrap">
					<a class="article_img_wrap" href="/room/<%=reserve.getRoomId()%>"><img class="article_img" alt="숙소 이미지" src="https://i.pinimg.com/564x/16/c6/1b/16c61bcd0bdd4eed5f341fe7a5c7ae0f.jpg"></a>
					<div class="article_info">
						<small class="reservation_dates"><%=DateUtil.formatKor(reserve.getCheckIn())%> - <%=DateUtil.formatKor(reserve.getCheckOut())%></small>
						<h3 class="room_name"><%=reserve.getName()%></h3>
						<p class="room_city"><%=reserve.getCity()%> <span class="status <%=reserve.getStatus()%>"><%=reserve.getStatus().getName()%></p>
						<a class="reservation_deatil" href="./reservations/<%=reserve.getId()%>">여행 세부사항 보기</a>
					</div>
				</article>
			<%
				}
			%>
			</main>				
		</section>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/userReserveList.js"></script>
</body>
</html>