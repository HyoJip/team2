<%@page import="com.team2.airbnb.model.Room"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>에어비엔비 | 숙소 정보</title>
		<link href="/resources/css/base.css" rel="stylesheet">
	</head>
	<body>
		<%@ include  file="./partial/header.jsp"%>
		<main class="wrap">
			<div class="nav_category"><a href="#">${room.address}</a> &gt; 숙소</div>
			<div class="room_image">
				<div class="room_image_grid">
					<img
						src="https://i.pinimg.com/564x/16/c6/1b/16c61bcd0bdd4eed5f341fe7a5c7ae0f.jpg"
						alt="숙소 이미지"
						class="room_img"
					/>
					<img
						src="https://i.pinimg.com/564x/25/99/b0/2599b09faf7d2b45024ef7465a4a84ef.jpg"
						alt="숙소 이미지"
						class="room_img"
					/>
					<img
						src="https://i.pinimg.com/736x/1b/3c/1b/1b3c1bb5fb2a72eacd993213363ec92b.jpg"
						alt="숙소 이미지"
						class="room_img"
					/>
					<img
						src="https://i.pinimg.com/736x/1b/3c/1b/1b3c1bb5fb2a72eacd993213363ec92b.jpg"
						alt="숙소 이미지"
						class="room_img"
					/>
					<img
						src="https://i.pinimg.com/564x/25/99/b0/2599b09faf7d2b45024ef7465a4a84ef.jpg"
						alt="숙소 이미지"
						class="room_img"
					/>
				</div>
			</div>
			<main class="main_wrap">
				<div class="main_left">
					<div class="room_header">
						<h1 class="room_title">${room.name}</h1>
						<h4 class="room_info">
							<small class="room_short_info"
								><i class="star">★</i> %RATING_VALUE%
								<span class="rating_count">(%REVIEW_COUNT%)</span></small
							>
							<small class="address">${room.address}</small>
						</h4>
					</div>
					<div class="host_info">
						<hgroup>
							<h2 class="username">${room.username}님이 호스팅하는 게스트용 숙소</h2>
							<h3 class="room_short_spec">
								최대인원 ${room.guests}명 · 침실 ${room.bedRooms}개 · 침대${room.beds}개 · 욕실 ${room.baths}개
							</h3>
						</hgroup>
						<a href="#" role="button"></a>
						<div class="user_profile"></div>
					</div>
					<div class="room_detail_info">
						<p class="room_description">${room.description}</p>
						<a href="#">호스트에게 연락하기</a>
					</div>
					<div class="room_facilities">
						<h3>편의시설</h3>
						<div class="facilities_wrap">
							<div class="facility_item">
								<i class="facility_icon fas fa-cookie-bite"></i>
								<span class="facility_description">주방</span>
							</div>
							<div class="facility_item">
								<i class="facility_icon fas fa-wifi"></i>
								<span class="facility_description">무선 인터넷</span>
							</div>
							<div class="facility_item">
								<i class="facility_icon fas fa-parking"></i>
								<span class="facility_description">건물 내 무료 주차</span>
							</div>
							<div class="facility_item">
								<i class="facility_icon far fa-snowflake"></i>
								<span class="facility_description">에어컨</span>
							</div>
						</div>
					</div>
				</div>
				<div class="main_right">
					<section class="reservation_wrap" id="reservationWrap">
						<header class="reservation_header">
							<h2 class="reservation_help_text" id="reserveHelpText">요금을 확인하려면 날짜를 입력하세요.</h2>
							<small>
								<i class="star">★</i>
								<span class="rating_value">3.54</span>(<span class="rating_count">79</span>)
							</small>
						</header>
						<main class="reservation_main">
							<div class="reservation_item_box" id="reservationBox">
								<div class="reservation_item">
									<h5 class="reservation_label">체크인</h5>
									<p class="reservation_display" id="checkInDisplay">날짜추가</p>
								</div>
								<div class="reservation_item">
									<h5 class="reservation_label">체크아웃</h5>
									<p class="reservation_display" id="checkOutDisplay">날짜추가</p>
								</div>
							</div>
							<div class="reservation_people">
								<h5 class="reservation_check">인원</h5>
								<p class="reservation_display">게스트 <span id="guestCount">1</span>명
									<span class="guest_counter_box" id="guestCounterBox">
										<i class="display_btn_icon fas fa-minus BtnDisabled" id="guestMinusBtn"></i>
										<i class="display_btn_icon fas fa-plus" id="guestPlusBtn"></i>
									</span>
								</p>
							</div>
						</main>
							<button class="reservation_btn" id="reservationBtn">예약 가능 여부 보기</button>
							<section class="reservation_price" id="reservePriceContainer"style="display: none;">
								<small class="price_comment">예약 확정 전에는 요금이 청구되지 않습니다.</small>
								<div class="price_item">
									<p class="price_name"><span class="room_price" id="roomPrice">%ROON_PRICE%</span> X <span class="reservation_night" id="roomNight">%reserveNight%</span></p>
									<p class="price_value" id="priceValue">%priceValue%</p>
								</div>
								<div class="price_item">
									<p class="price_name">서비스 수수료</p>
									<p class="price_value">￦5,000</p>
								</div>
								<div class="total_price">
									<p class="price_name">총 합계</p>
									<p class="price_value" id="totalPrice">%totalPrice%</p>
								</div>
							</section>
							<form action="/room/${room.id}/reserve" method="GET" class="reservation_form" id="reservationForm" style="display: none;">
								<header class="form_header">
									<div class="header_text">
										<h3 class="header_title">날짜 선택</h3>
										<p class="header_body">여행 날짜를 입력하여 정확한 요금을 확인하세요.</p>
									</div>
									<div class="header_inputs">
										<div class="input_item">
											<label for="" class="reservatioin_label">
												체크인
												<input type="text" class="reservation_input" placeholder="YYYY.MM.DD" name="checkIn" id="checkInInput">
											</label>
										</div>
										<div class="input_item">
											<label for="" class="reservatioin_label">
												체크아웃
												<input type="text" class="reservation_input" placeholder="YYYY.MM.DD" name="checkOut" id="checkOutInput">
											</label>
										</div>
									</div>
								</header>
								<main class="form_main">
									<div class="pagination_btns">
										<button class="pagination_btn" id="prevPage">
											&lt;
										</button>
										<button class="pagination_btn" id="nextPage">
											&gt;
										</button>
									</div>
									<div class="calendar_wrap" id="calendarWrap">
										<article class="calendar_item">
											<div id="curCalendar">
												<div class="calendar_month">%MONTH%월 %YEAR%</div>
												<div class='calendar_row'>
													<div class='calendar_day dayname'><span>일</span></div>
													<div class='calendar_day dayname'><span>월</span></div>
													<div class='calendar_day dayname'><span>화</span></div>
													<div class='calendar_day dayname'><span>수</span></div>
													<div class='calendar_day dayname'><span>목</span></div>
													<div class='calendar_day dayname'><span>금</span></div>
													<div class='calendar_day dayname'><span>토</span></div>
												</div>
											</div>
										</article>
										<article class="calendar_item">
											<div id="nextCalendar">
												<div class="calendar_month">%MONTH%월 %YEAR%</div>
												<div class='calendar_row'>
													<div class='calendar_day dayname'><span>일</span></div>
													<div class='calendar_day dayname'><span>월</span></div>
													<div class='calendar_day dayname'><span>화</span></div>
													<div class='calendar_day dayname'><span>수</span></div>
													<div class='calendar_day dayname'><span>목</span></div>
													<div class='calendar_day dayname'><span>금</span></div>
													<div class='calendar_day dayname'><span>토</span></div>
												</div>
											</div>
										</article>
									</div>
								</main>
								<footer class="form_footer">
									<input type="reset" class="input_reset" id="resetInput" value="날짜 지우기">
									<button class="form_exit" id="formExitBtn">닫기</button>
								</footer>
								<input type="hidden" name="roomPrice" id="roomPriceDB" value="${room.price}">
								<input type="hidden" name="roomMaxPerson" id="roomMaxPersonDB" value="${room.guests}">
							</form>
					</section>
				</div>
			</main>
			<section class="review_wrap">
				<h1 class="review_title">
					<i class="star">★</i> %RATING_VALUE%점(후기 %REVIEW_COUNT%개)
				</h1>
				<article class="review_item">
					<header class="review_header">
						<div class="guest_profile_img"></div>
						<div class="review_info">
							<h5 class="guest_name">%GUEST_NAME%</h5>
							<p class="review_created">%REVIEW_CREATED%</p>
						</div>
					</header>
					<main class="review_main">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odit
						doloribus illo nemo! Placeat blanditiis itaque impedit sed, dolorum ducimus
						consequatur aspernatur explicabo sapiente. At id vitae vel distinctio
						laudantium.
					</main>
				</article>
				<article class="review_item">
					<header class="review_header">
						<div class="guest_profile_img"></div>
						<div class="review_info">
							<h5 class="guest_name">%GUEST_NAME%</h5>
							<p class="review_created">%REVIEW_CREATED%</p>
						</div>
					</header>
					<main class="review_main">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odit
						doloribus illo nemo! Placeat blanditiis itaque impedit sed, dolorum ducimus
						consequatur aspernatur explicabo sapiente. At id vitae vel distinctio
						laudantium.
					</main>
				</article>
				<article class="review_item">
					<header class="review_header">
						<div class="guest_profile_img"></div>
						<div class="review_info">
							<h5 class="guest_name">%GUEST_NAME%</h5>
							<p class="review_created">%REVIEW_CREATED%</p>
						</div>
					</header>
					<main class="review_main">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odit
						doloribus illo nemo! Placeat blanditiis itaque impedit sed, dolorum ducimus
						consequatur aspernatur explicabo sapiente. At id vitae vel distinctio
						laudantium.
					</main>
				</article>
			</section>
			<section class="room_rule">
				<main>
					<header class="rule_header">알아두어야 할 사항</header>
					<div class="rules_wrap">
						<div class="rule_item">
							<i class="far fa-clock rule_icon"></i>
							<span class="rule_description">체크인 시간: ${room.checkIn}시 이후</span>
						</div>
						<div class="rule_item">
							<i class="far fa-clock rule_icon"></i>
							<span class="rule_description">체크아웃 시간: ${room.checkOut}시 이전</span>
						</div>
						<div class="rule_item">
							<i class="fas fa-smoking-ban rule_icon"></i>
							<span class="rule_description">흡연 금지</span>
						</div>
						<div class="rule_item">
							<i class="fas fa-ban rule_icon"></i>
							<span class="rule_description">반려동물 동반 불가</span>
						</div>
					</div>
				</main>
				<aside class="message_wrap">
					<button class="message_btn">호스트에게 연락하기</button>
					<small class="alert">안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.</small>
				</aside>
			</section>
		</main>
		<jsp:include page="./partial/footer.jsp" />
		<script src="/resources/index.js"></script>
	</body>
</html>
