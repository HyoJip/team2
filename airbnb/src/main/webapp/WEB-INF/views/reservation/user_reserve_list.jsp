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
	<jsp:include page="../partial/header.jsp" />
	<div class="wrap">
		<section class="trip_before">
			<header class="header">
				<h1 class="header_title">예정된 일정</h1>
			</header>
			<main class="main">
				<article class="article_wrap">
					<img class="article_img" alt="숙소 이미지" src="">
					<div class="article_info">
						<small class="reservation_dates">%CHECKIN%-%CHECKOUT%</small>
						<h3 class="room_name">%ROOMNAME%</h3>
						<p class="room_city">%ROOMCITY%</p>
						<a class="reservation_deatil">여행 세부사항 보기</a>
					</div>
				</article>
			</main>		
		</section>
		<section class="trip_after">
			<header class="header">
				<h1 class="header_title">지난 일정</h1>
			</header>
			<main class="main">
				<article class="article_wrap">
					<img class="article_img" alt="숙소 이미지" src="">
					<div class="article_info">
						<small class="reservation_dates">%CHECKIN%-%CHECKOUT%</small>
						<h3 class="room_name">%ROOMNAME%</h3>
						<p class="room_city">%ROOMCITY%</p>
						<a class="reservation_deatil">여행 세부사항 보기</a>
					</div>
				</article>
			</main>				
		</section>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/userReserveList.js"></script>
</body>
</html>