<%@page import="com.team2.airbnb.util.NumberUtil"%>
<%@page import="java.text.DecimalFormat"%>
<%@page import="java.time.LocalDate"%>
<%@page import="com.team2.airbnb.util.DateUtil"%>
<%@page import="com.team2.airbnb.model.ReserveList"%>
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
	List<ReserveList> list = (List<ReserveList>) request.getAttribute("reserveList");
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
					<th>숙소이름</th>
					<th>주소</th>
					<th>여행 날짜</th>
					<th>예약 일자</th>
					<th>인원</th>
					<th>가격</th>
				</tr>
			</thead>
			<tbody>
				<% for (ReserveList object : list) {
					// 가격 포멧팅
					LocalDate checkIn = object.getReserveCheckIn();
					LocalDate checkOut = object.getReserveCheckOut();
					int price = object.getRoomPrice() * DateUtil.getDateDiff(checkIn.toString(), checkOut.toString()) + Reservation.COMMISION;
				%>
				<tr>
					<td><%=object.getReserveStatus().getName()%></td>
					<td><%=object.getRoomName()%></td>
					<td><%=object.getRoomAddress()%></td>
					<td><%=checkIn%>-<%=checkOut%></td>
					<td><%=object.getReserveCreated()%></td>
					<td><%=object.getReserveguests()%></td>
					<td><%=NumberUtil.wonFormatter.format(price)%></td>
				</tr>				
				<%} %>
			</tbody>
		</table>
	</main>
	<jsp:include page="../partial/footer.jsp" />
</body>
</html>