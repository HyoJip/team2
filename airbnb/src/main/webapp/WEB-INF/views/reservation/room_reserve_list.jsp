<%@page import="com.team2.airbnb.model.ReserveStatus"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.team2.airbnb.util.NumberUtil"%>
<%@page import="java.text.DecimalFormat"%>
<%@page import="java.time.LocalDate"%>
<%@page import="com.team2.airbnb.util.DateUtil"%>
<%@page import="com.team2.airbnb.model.RoomReserve"%>
<%@page import="java.util.List"%>
<%@page import="com.team2.airbnb.model.Reservation"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="/resources/css/base.css" rel="stylesheet">
<title>에어비엔비|예약확인</title>
</head>
<body>
<%
	List<RoomReserve> list = (List<RoomReserve>) request.getAttribute("reserveList");
%>
	<jsp:include page="../partial/header.jsp" />
	<main class="main_wrap">
		<header class="main_header">
			<h1 class="main_header_title">예약</h1>
		</header>
		<table class="reserve_list">
			<thead>
				<tr>
					<th>상태</th>
					<th>게스트</th>
					<th class="trip_title">여행 날짜</th>
					<th>예약 일자</th>
					<th>수입</th>
					<th>비고</th>
				</tr>
			</thead>
			<tbody>
				<%
					for (RoomReserve object : list) {
							// 가격 포멧팅
							LocalDate checkIn = object.getCheckIn();
							LocalDate checkOut = object.getCheckOut();
							int nights = DateUtil.getDateDiff(checkIn.toString(), checkOut.toString());
							int income = object.getPrice() * nights;
				%>
				<tr>
					<td class="status <%=object.getStatus()%>"><%=object.getStatus().getName()%></td>
					<td class="guest"><span class="guest_name"><%=object.getUserName()%></span><small class="guest_count">게스트 <%=object.getGuests()%>명</small></td>
					<td class="trip"><span><%=DateUtil.formatKor(checkIn)%>-</span><span><%=checkOut.getMonthValue()+"월 "+checkOut.getDayOfMonth()+"일"%></span><small class="reserve_night"><%=nights%>박</small></td>
					<td class="created"><%=DateUtil.formatKor(object.getCreated())%></td>
					<td class="income"><%=NumberUtil.wonFormatter.format(income)%></td>
					<td class="detail">
						<button class="datail_btn detailBtn">세부정보 <i class="fas fa-ellipsis-h"></i></button>
						<aside class="detail_aside detailPopup">
							<div class="aside_form" data-id=<%=object.getId()%>>
							<%
								if (object.getStatus().equals(ReserveStatus.PENDING)) {
							%>
								<button class="aside_btn approveBtn">예약 승낙</button>
								<button class="aside_btn rejectBtn">예약 거절</button>
							<%
								} else if (object.getStatus().equals(ReserveStatus.ACCEPTED)) {
							%>
								<button class="aside_btn approveBtn" disabled>예약 승낙</button>
								<button class="aside_btn rejectBtn">예약 거절</button>
							<%
								} else if (object.getStatus().equals(ReserveStatus.REFUSED)) {
							%>
								<button class="aside_btn approveBtn">예약 승낙</button>
								<button class="aside_btn rejectBtn" disabled>예약 거절</button>
							<%
								} else if (object.getStatus().equals(ReserveStatus.COMPLETED)) {
							%>
								<button class="aside_btn approveBtn" disabled>예약 승낙</button>
								<button class="aside_btn rejectBtn" disabled>예약 거절</button>
							<%	}%>
								<button class="aside_btn emailBtn">이메일 보내기</button>
							</div>
						</aside>
					</td>
				</tr>				
				<%} %>
			</tbody>
		</table>
	</main>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/roomReserveList.js"></script>
</body>
</html>