<%@page import="com.team2.airbnb.util.NumberUtil"%>
<%@page import="com.team2.airbnb.util.DateUtil"%>
<%@page import="com.team2.airbnb.model.vo.ReserveVO"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>에어비앤비 | 예약 상세</title>
		<link href="/resources/css/base.css" rel="stylesheet" />
	</head>
	<body>
		<%
			ReserveVO reserve = (ReserveVO) request.getAttribute("reserve");
			String refundPrice = NumberUtil.wonFormatter.format(Double.parseDouble(request.getAttribute("refundPrice").toString()));
			int nights = DateUtil.getDateDiff(reserve.getCheckIn().toString(), reserve.getCheckOut().toString());
		%>
		<jsp:include page="../partial/header.jsp" />
		<div class="wrap">
			<header class="header">
				<i class="fas fa-arrow-left" id="backIcon"></i>
				<h1 class="header_title">예약 상세</h1>
			</header>
			<article class="reserve">
				<main class="main">
					<h2 class="room_name"><%=reserve.getName()%></h2>
					<h3 class="room_address">
						<%=reserve.getCity() + " " + reserve.getAddress()%>
					</h3>
					<div class="reserve_time_wrap">
						<div class="reserve_time">
							<h4 class="reserve_check">
								<%=DateUtil.formatKor(reserve.getCheckIn())%>
							</h4>
							<small class="room_check">체크인 시간: <%=reserve.getRoomCheckIn()%>:00</small>
						</div>
						<i class="fas fa-angle-right"></i>
						<div class="reserve_time">
							<h4 class="reserve_check">
								<%=DateUtil.formatKor(reserve.getCheckOut())%>
							</h4>
							<small class="room_check">체크아웃 시간: <%=reserve.getRoomCheckOut()%>:00</small>
						</div>
						<div class="reserve_detail">
							<p class="reserve_night"><%=nights%>박</p>
							<p class="reserve_guests">인원 <%=reserve.getGuests()%>명</p>
						</div>
					</div>
					<div class="icons">
						<p class="icons_item">
							<i class="far fa-comment-dots"></i><span>메시지 보내기</span>
						</p>
						<p class="icons_item" id="updateDisplayer">
							<a href="#updateDisplayer">
								<i class="far fa-calendar-times"></i><span>변경 또는 취소</span>
							</a>
						</p>
					</div>
					<footer class="footer" id="footer">
						<section class="reserve_change">
							<i class="fas fa-home"></i>
							<h3 class="footer_title">예약 변경</h3>
							<p class="footer_body">날짜나 숙박 인원 변경 요청하기</p>
							<a href="#changeStep1">
							<button id="updateNextBtn">다음</button>
							</a>
						</section>
						<section class="reserve_cancel">
							<i class="fas fa-ban"></i>
							<h3 class="footer_title">예약 취소하기</h3>
							<p class="footer_body">
								예약이 최종적으로 취소되기 전에 모든 내용을 검토할 수 있습니다.
							</p>
							<a href="#deleteStep1">
								<button id="cancelNextBtn">다음</button>
							</a>
						</section>
					</footer>
					<section class="change_step-1" id="changeStep1">
						<h2 class="change_step_title">무엇을 변경하고 싶으세요?</h2>
						<div class="reservation_people">
							<h5 class="reservation_check">인원</h5>
							<p class="reservation_display">
								게스트 <span id="guestCount">${reserve.guests}</span>명
								<span class="guest_counter_box" id="guestCounterBox">
									<i
										class="display_btn_icon fas fa-minus BtnDisabled"
										id="guestMinusBtn"
									></i>
									<i
										class="display_btn_icon fas fa-plus"
										id="guestPlusBtn"
									></i>
								</span>
							</p>
						</div>
						<main class="reservation_main">
							<form
								action=""
								method="POST"
								class="reservation_form"
								id="reservationForm">
								<header class="form_header">
									<div class="header_text">
										<h3 class="header_title">날짜 선택</h3>
										<p class="header_body">
											여행 날짜를 입력하여 정확한 요금을 확인하세요.
										</p>
									</div>
									<div class="header_inputs">
										<div class="input_item">
											<label for="" class="reservatioin_label">
												체크인
												<input
													type="text"
													class="reservation_input"
													placeholder="${reserve.checkIn}"
													name="checkIn"
													id="checkInInput" />
											</label>
										</div>
										<div class="input_item">
											<label for="" class="reservatioin_label">
												체크아웃
												<input
													type="text"
													class="reservation_input"
													placeholder="${reserve.checkOut}"
													name="checkOut"
													id="checkOutInput" />
											</label>
										</div>
									</div>
								</header>
								<main class="form_main">
									<div class="pagination_btns">
										<button class="pagination_btn" id="prevPage">&lt;</button>
										<button class="pagination_btn" id="nextPage">&gt;</button>
									</div>
									<div class="calendar_wrap" id="calendarWrap">
										<article class="calendar_item">
											<div id="curCalendar">
												<div class="calendar_month">%MONTH%월 %YEAR%</div>
												<div class="calendar_row">
													<div class="calendar_day dayname">
														<span>일</span>
													</div>
													<div class="calendar_day dayname">
														<span>월</span>
													</div>
													<div class="calendar_day dayname">
														<span>화</span>
													</div>
													<div class="calendar_day dayname">
														<span>수</span>
													</div>
													<div class="calendar_day dayname">
														<span>목</span>
													</div>
													<div class="calendar_day dayname">
														<span>금</span>
													</div>
													<div class="calendar_day dayname">
														<span>토</span>
													</div>
												</div>
											</div>
										</article>
										<article class="calendar_item">
											<div id="nextCalendar">
												<div class="calendar_month">%MONTH%월 %YEAR%</div>
												<div class="calendar_row">
													<div class="calendar_day dayname">
														<span>일</span>
													</div>
													<div class="calendar_day dayname">
														<span>월</span>
													</div>
													<div class="calendar_day dayname">
														<span>화</span>
													</div>
													<div class="calendar_day dayname">
														<span>수</span>
													</div>
													<div class="calendar_day dayname">
														<span>목</span>
													</div>
													<div class="calendar_day dayname">
														<span>금</span>
													</div>
													<div class="calendar_day dayname">
														<span>토</span>
													</div>
												</div>
											</div>
										</article>
									</div>
								</main>
								<footer class="form_footer">
									<input
										type="reset"
										class="input_reset"
										id="resetInput"
										value="날짜 지우기"
									/>
									<button class="form_update" id="formUpdateBtn">수정</button>
								</footer>
								<input type="hidden" name="roomId" id="roomId" value="${reserve.roomId}">
							</form>
							<input type="hidden" name="roomPrice" id="roomPriceDB" value="${reserve.price}">
							<input type="hidden" name="roomMaxPerson" id="roomMaxPersonDB" value="${reserve.roomMaxGuests}">
						</main>
					</section>
					<section class="cancel_step-1" id="deleteStep1">
						<h2 class="cancel_step_title">정말 취소하시겠습니까?</h2>
						<p class="cancel_step_body">취소하기 전에 환불되는 금액을 확인하세요.</p>
						<small>체크인 <span>일주일 전</span>에는 <span>전액 환불</span> 받을 수 있습니다.</small>
						<%
							if (request.getParameter("error") != null) {
								if (request.getParameter("error").equalsIgnoreCase("outOfDate")){
								out.print("<small>체크인 <span>하루 전</span>에는 취소할 수 없습니다.</small>");
								}
							}
						%>
						<form action="./${reserve.id}/cancel" method="POST">
							<input type="hidden" value="${reserve.checkIn}" name="checkIn">
							<input type="hidden" value="${reserve.checkOut}" name="checkOut">
							<button class="cancel_step_btn">예약 취소</button>
						</form>
					</section>
				</main>
				<aside class="aside">
					<div class="bills">
						<small class="room_detail">
							<span class="beds">침대 <%=reserve.getBeds()%></span>개 · 침실
							<span class="bedrooms"><%=reserve.getBedrooms()%></span>개 · 화장실
							<span class="baths"><%=reserve.getBaths()%>개</span>
						</small>
						<div class="reserve_detail">
							<p class="reserve_night" id="roomNight"><%=nights%>박</p>
						</div>
						<h5 class="price">가격<span id="roomPrice"><%=NumberUtil.wonFormatter.format(reserve.getPrice())%></span></h5>
						<small class="service">서비스 수수료<span><%=NumberUtil.wonFormatter.format(5000)%></span></small>
						<h3 class="total_price" id="totalPrice">
							<%=NumberUtil.wonFormatter.format(reserve.getPrice()*nights + 5000)%>
						</h3>
						<h2 class="status <%=reserve.getStatus()%>" id="reserveStatus">
							<%=reserve.getStatus().getName()%>
						</h2>
						<section class="delete_info">
							<h3 class="refund_price-name">총 환불 금액</h3>
							<h4 class="refund_price-value"><%=refundPrice%></h4>
						</section>
					</div>
				</aside>
			</article>
		</div>
		<jsp:include page="../partial/footer.jsp" />
		<script src="/resources/reserveDetail.js"></script>
	</body>
</html>
