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
				alert("ȣ��Ʈ ������ ���������� ��� �Ǿ����ϴ�.");
				document.location.href="main.jsp";	//���������� �̵�
			</script>
<%
		} else {
%>		
			<script language=javascript>
				alert("ȣ��Ʈ ���� ��Ͽ� ���� �߽��ϴ�. \n�ٽ� �õ��� �ּ���.");
				document.location.href="hostroom.jsp";	//ȣ��Ʈ ��� ������ �̵�
			</script>
<%
		}
%>