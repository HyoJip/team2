<%@page import="java.util.Calendar"%> <%@page import="java.text.SimpleDateFormat"%> <%@ page
language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>에어비엔비|예약</title>
		<link href="/resources/css/base.css" rel="stylesheet" />
	</head>
	<body>
		<jsp:include page="../partial/header.jsp" />
		<main class="main_wrap">
			<header class="main_header">
				<i class="fas fa-arrow-left"></i>
				<h1 class="main_title">예약 요청하기</h1>
			</header>
			<main class="main_main">
				<section class="main_left">
					<div class="advise_wrap">
						<p class="advise">
							<strong>흔치 않은 기회입니다.</strong><br>
							%username%님의 숙소는 보통 예약이
							가득 차 있습니다.
						</p>
						<i class="fas fa-gem"></i>
					</div>
					<form
						class="reservation_form"
						id="reserveForm"
						action="/room/1/reserve"
						method="POST"
					>
						<div class="reservation_info_wrap">
							<h1 class="reservation_info_title">예약정보</h1>
							<label class="info_name">날짜</label>
							<input class="info_value" name="checkIn" value="${checkIn}" readonly />-
							<input class="info_value" name="checkOut" value="${checkOut}" readonly />
							<label class="info_name">게스트</label>게스트 
							<input
								class="info_value"
								name="numOfGuest"
								value="${numOfGuest}"
								readonly
							/>명
						</div>
						<div class="refund_notice">
							<h2 class="refund_title">환불 정책</h2>
							<p class="refund_description">
								${minDateForFullRefund} 11:00 AM전에 예약을 취소하시면, 취소된
								시점에서 24시간이 지난 후부터 숙박하지 않은 날짜에 대해 (서비스
								수수료와 청소비를 제외한) 요금의 50%가 환불됩니다.
							</p>
							<small class="refund_small"
								><strong>호스트가 제공하는 환불 정책이 내게 적합한지 확인하세요.</strong> 3월 15일
								혹은 그 이후 확정된 예약에는 코로나19 확산 사태에 따른 정상참작이
								가능한 상황 정책이 적용되지 않습니다.</small
							>
						</div>
						<div class="confirm_notice">
							<i class="far fa-clock"></i>
							<p class="confirm_description">
								<strong
									>호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직
									확정된 것이 아닙니다.</strong
								>
								예약 확정 전까지는 요금이 청구되지 않습니다.
							</p>
						</div>
						<div class="reserve_btn_wrap">
							<small
								>아래 버튼을 선택하면, <span>숙소 이용규칙</span>,
								<span>안전 정보 공개</span>, <span>환불 정책</span>, 및
								<span>게스트 환불 정책</span>에 동의하는 것입니다. 또한
								<span>숙박세</span> 및 <span>서비스 수수료</span>를 포함하여 표시된
								총 금액에 동의합니다. 에어비앤비는 이제 이 지역에서 정부가 부과한
								숙박세를 징수하여 납부합니다.
							</small>
							<button class="reserve_btn">예약 요청하기</button>
						</div>
					</form>
				</section>
				<section class="main_right">
					<div class="reservation_wrap">
						<section class="reservation_room">
							<div class="room_img"></div>
							<div class="room_info">
								<small class="room_city">%ROOM_ADDR%</small>
								<p class="room_title">%ROOM_NAME%</p>
								<small class="room_spec"
									>침대 <span class="room_beds">${beds}</span>개·욕실
									<span class="room_bath">${baths}</span>개
								</small>
								<p class="room_rating">
									<i class="star">★</i> <span class="rating_value"></span>(<span
										class="rating_count"
										>79</span
									>)
								</p>
							</div>
						</section>
						<section class="reservation_price">
							<h2 class="price_title">요금 세부정보</h2>
							<div class="price_item">
								<p class="price_name">
									<span class="room_price" id="roomPrice">${roomPrice}</span> X
									<span class="reservation_night" id="roomNight"
										>${reserveNight}박</span
									>
								</p>
								<p class="price_value" id="priceValue">${totalPrice}</p>
							</div>
							<div class="price_item">
								<p class="price_name"><span class="underline">서비스 수수료</span></p>
								<p class="price_value">&#x20A9;5,000</p>
							</div>
							<div class="total_price">
								<p class="price_name">총 합계(<span class="underline">KRW</span>)</p>
								<p class="price_value" id="totalPrice">${finalPrice}</p>
							</div>
						</section>
					</div>
				</section>
			</main>
		</main>
		<jsp:include page="../partial/footer.jsp" />
		<script src="/resources/reserveForm.js"></script>
	</body>
</html>
