<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에어비앤비 | 후기 작성</title>
<link href="/resources/css/base.css" rel="stylesheet" />
</head>
<body>
	<%@ include file="../partial/header.jsp"%>
	
	<header class="aside_header">
		<i class="fas fa-arrow-left" id="backIcon"></i>
		<h1 class="aside_title">평가 및 후기</h1>
	</header>
	<div class="wrap">
		<aside class="aside_wrap">
			<div class="img_wrap">
				<img class="room_photo" src="https://i.pinimg.com/564x/16/c6/1b/16c61bcd0bdd4eed5f341fe7a5c7ae0f.jpg" alt="숙소 이미지">
			</div>
			<div class="room_detail">
				<h3 class="room_address_wrap"><span class="room_address">${room.address}</span> <span class="room_name">${room.name}</span></h3>
				<h3 class="host">호스트: <span class="host_name">${room.username}</span></h3>
			</div>
		</aside>
		<main class="main">
			<h2><span class="host_name">${room.username}</span>님에 대한 후기를 쓰세요.</h2>
			<p>14일 동안 후기를 작성할 수 있습니다. 후기 작성 기간이 지나면 후기를 작성할 수 없습니다.</p>
			
			<form action="" id="reviewForm" method="POST">
				<fieldset class="rating">
				    <input type="radio" id="star5" name="value" value="5" /><label for="star5" title="매우 좋음 - 5"></label>
				    <input type="radio" id="star4" name="value" value="4" /><label for="star4" title="좋음 - 4"></label>
				    <input type="radio" id="star3" name="value" value="3" /><label for="star3" title="보통 - 3"></label>
				    <input type="radio" id="star2" name="value" value="2" /><label for="star2" title="나쁨 - 2"></label>
				    <input type="radio" id="star1" name="value" value="1" /><label for="star1" title="매우 나쁨 - 1"></label>
				</fieldset>
				<label class="label">공개 후기 <span class="label_detail">(필수항목)</span></label>
				<p>회원님의 후기는 회원님의 프로필과 회원님의 호스트 숙소 페이지에 전체 공개 됩니다. 다음 페이지에서 에어비앤비에게 비공개로 추가 피드백을 남기실 수 있습니다.</p>
				<textarea class="review_content" name="context"></textarea>
				<input type="hidden" value="${reserveId}" name="reserveId">
				<button>확인</button>
			</form>		
		</main>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/reviewForm.js"></script>
</body>
</html>