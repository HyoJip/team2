<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>에어비앤비</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/main.css" />
<link
	href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
	rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
	rel="stylesheet">
</head>
<body>
	<%@ include  file="./partial/header.jsp"%>
	<div class="cont01">
		<div class="cont01_text">
			<h2>이제 여행은 가까운 곳에서</h2>
			<p>
				가까운 곳의 숨겨진 아름다움을<br /> 발견하는 색다른 휴가를 즐겨보세요.
			</p>
		</div>
	</div>
	<!--cont01 END-->

	<div class="cont02">
		<h2>메뉴 정보</h2>
		<div class="box">
			<div class="box1">
				<a href="#"> <!-- reservation페이지 연결 --> <img
					src="/resources/images/reservation.jpg" alt="숙소예약하기" />
					<dl>
						<dt>숙소예약</dt>
						<dd>저렴한 가격에 예약하세요</dd>
					</dl>
				</a>
			</div>
			<div class="box2">
				<a href="#"> <!-- list페이지 연결 --> <img src="/resources/images/main_2.jpg"
					alt="숙소리스트" />
					<dl>
						<dt>숙소리스트</dt>
						<dd>다양한 정보를 찾아보세요</dd>
					</dl>
				</a>
			</div>
		</div>
		<!--box END-->
	</div>
	<!--cont02 END-->

	<jsp:include page="./partial/footer.jsp" />
	<!-- footer END -->
</body>
</html>