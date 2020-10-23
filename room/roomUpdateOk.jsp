<%@ page import="java.sql.Date"%>
<%@ page import="java.time.LocalDate"%>
<%@ page import="java.sql.Timestamp"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.text.DateFormat"%>
<%@ page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="room.*" %>

<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="room" class="room.RoomRoomBean"/>
<jsp:setProperty property="*" name="room"/>

<%	
	RoomDBBean db = RoomDBBean.getInstance();
	ArrayList<RoomRoomBean> roomList = db.listRoom();
	
	int id = 61;	//집에선 61 학교에선 83
	
	for(int i = 0; i < roomList.size(); i++) {
		if(id == roomList.get(i).getR_id()) {
			room.setR_created(roomList.get(i).getR_created());
			break;
		}
	}
	
	room.setR_id(id);

	String address1 = request.getParameter("r_address1");
	String address2 = request.getParameter("r_address2");
	String address3 = request.getParameter("r_address3");
	room.setR_address(address1 + "  " + address2 + "  "+ address3);
	
	LocalDate local = LocalDate.now();
		
	room.setR_updated(Date.valueOf(local));
	
	int isSucess = db.updateRoom(room);
		
	if(isSucess == 1) {
%>
		<script language=javascript>
			alert("호스트 정보가 정상적으로 수정 되었습니다.");
			document.location.href="../Login/testmain.jsp";	//메인페이지 이동
		</script>
<%
	} else {
%>		
		<script language=javascript>
			alert("호스트 정보 수정에 실패 했습니다. \n다시 시도해 주세요.");
			document.location.href="roomUpdate.jsp";	//룸 수정 페이지 이동
		</script>
<%
	}
%>