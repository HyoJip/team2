<%@ page import="java.sql.Date"%>
<%@ page import="java.time.LocalDate"%>
<%@ page import="java.sql.Timestamp"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="room.*" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="room" class="room.RoomRoomBean"/>
<jsp:setProperty property="*" name="room"/>

<%	
	String address1 = request.getParameter("r_address1");
	String address2 = request.getParameter("r_address2");
	String address3 = request.getParameter("r_address3");
	room.setR_address(address1 + "  " + address2 + "  " + address3);	//공백을 2칸 주기

	LocalDate local = LocalDate.now();
		
	room.setR_updated(Date.valueOf(local));
	room.setR_created(Date.valueOf(local));
		
	RoomDBBean rb = RoomDBBean.getInstance();
	int isSucess = rb.insertRoom(room);
		
		if(isSucess == 1) {
%>
			<script language=javascript>
				<%-- alert("호스트 정보가 정상적으로 등록 되었습니다."); --%>
				document.location.href="../room/roomPhoto.jsp";	//roomPhoto페이지 이동
			</script>
<%
		} else {
%>		
			<script language=javascript>
				<%-- alert("호스트 정보 등록에 실패 했습니다. \n다시 시도해 주세요."); --%>	
				alert("다시 시도해 주세요.");
				document.location.href="hostroom.jsp";	//호스트 등록 페이지 이동
			</script>
<%
		}
%>