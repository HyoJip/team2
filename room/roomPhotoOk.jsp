<%@page import="java.util.*"%>
<%@page import="java.io.*"%>
<%@page import="org.apache.commons.fileupload.*"%>
<%@ page import="java.time.LocalDate"%>
<%@ page import="java.sql.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import ="room.*" %>

<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="roomPhoto" class="room.RoomPhotoBean"/>
<jsp:setProperty property="*" name="roomPhoto"/>

<%
	final int MAX = 6;		//이미지 최대 개수 
	int rooms_id;
	rooms_id = 38;
	roomPhoto.setR_room_id(rooms_id);
	
	String fileUploadPath = "C:\\upload1";
	DiskFileUpload upload = new DiskFileUpload();
		
	String[] images = new String[MAX];
	for(int i = 0; i < MAX; i++) {
		images[i] = "";
	}
	
	int count = 0;
	
	List items = upload.parseRequest(request);
	
	Iterator params = items.iterator();
	
	while(params.hasNext()) {
		FileItem fileItem = (FileItem) params.next();
	
		if(fileItem.isFormField()) {	//파일 형식이 아니라면 
			String value = fileItem.getString("utf-8");
			roomPhoto.setR_caption(value);
		} else {	//파일 형식이라면
			if(count < MAX) {
				String fileName = fileItem.getName();
				
				fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
				File file = new File(fileUploadPath + "/" + System.currentTimeMillis() + fileName);
				fileItem.write(file);
				
				images[count] = fileName;
				count++;
			}
			else {
				break;
			}
		}
	}
	
	roomPhoto.setR_file(images);
		
	LocalDate local = LocalDate.now();
	
	roomPhoto.setR_created(Date.valueOf(local));
	roomPhoto.setR_updated(Date.valueOf(local));
	
	RoomDBBean rb = RoomDBBean.getInstance();	
	int isSucess = rb.insertRoom_Photo(roomPhoto);
		
	if(isSucess == 1){
%>
		<script language=javascript>
			alert("룸 포토 정보가 정상적으로 등록 되었습니다.");
			document.location.href="room.jsp";	
		</script>
<%
	} else {
%>		
		<script language=javascript>
			alert("룸 포토  정보 등록에 실패 했습니다. \n다시 시도해 주세요.");
			document.location.href="../roomRegistration/hostroom.jsp";	
		</script>
<%
	}
%>