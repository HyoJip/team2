<%@page import="java.sql.Timestamp"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import = "room.*" %>

<%
	request.setCharacterEncoding("euc-kr");
%>
<jsp:useBean id="room" class="room.RoomRoomBean"/>
<jsp:setProperty property="*" name="room"/>

<%	
	String address1 = request.getParameter("r_address1");
	String address2 = request.getParameter("r_address2");
	String address3 = request.getParameter("r_address3");
	room.setR_address(address1+" "+address2+address3); 
	RoomDBBean rb = RoomDBBean.getInstance();
	int isSucess = rb.insertRoom(room);
		
		if(isSucess == 1){
%>
			<script language=javascript>
				alert("호스트 정보가 정상적으로 등록 되었습니다.");
				document.location.href="main.jsp";	//메인페이지 이동
			</script>
<%
		} else {
%>		
			<script language=javascript>
				alert("호스트 정보 등록에 실패 했습니다. \n다시 시도해 주세요.");
				document.location.href="hostroom.jsp";	//호스트 등록 페이지 이동
			</script>
<%
		}
%>