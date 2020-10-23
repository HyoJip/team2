<%@page import="java.io.File"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import = "room.*" %>    
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="room" class="room.RoomRoomBean"/>
<jsp:setProperty property="*" name="room"/>		
<%
	int id = 41;
	room.setR_id(id);

	RoomDBBean db = RoomDBBean.getInstance();
	int isSucess = db.deleteRoom(room);
	
	if(isSucess == 1){
%>
		<script language=javascript>
			alert("호스트 정보가 정상적으로 삭제 되었습니다.");
			document.location.href="../Login/testmain.jsp";	//메인페이지 이동
		</script>
<%
	} else {
%>		
		<script language=javascript>
			alert("호스트 정보 삭제에 실패 했습니다. \n다시 시도해 주세요.");
			document.location.href="roomUpdate.jsp";	//룸 수정 페이지 이동
		</script>
<%
	}
%>