<%@ page import="java.util.*"%>
<%@ page import="java.io.*"%>
<%@ page import="org.apache.commons.fileupload.*"%>
<%@ page import="java.time.LocalDate"%>
<%@ page import="java.sql.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="room.*" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="roomPhoto" class="room.RoomPhotoBean"/>
<jsp:setProperty property="*" name="roomPhoto"/>
<%
	String fileUploadPath = "C:\\upload1";   
	//String fileUploadPath = "C:\\workspace\\Team2\\WebContent\\images"; 	
	DiskFileUpload upload = new DiskFileUpload();
	
	List items = upload.parseRequest(request);
	
	int count = items.size();
	
	if(count > RoomPhotoBean.MAX ) {
	%>
		<script language=javascript>
			alert("파일은 최대 6개까지 업로드 할 수 있습니다.");
			document.location.href="roomPhoto.jsp";	
		</script>
	<%
		return;
	}
	
	int rooms_id = 14;  //집에선 14, 학교는 40
	roomPhoto.setR_room_id(rooms_id);
	String[] image_files = new String[RoomPhotoBean.MAX];
	
	for(int i = 0; i < RoomPhotoBean.MAX; i++) {
		image_files[i] = "";
	}
		
	int image_count = 0;

	Iterator params = items.iterator();
	
	while(params.hasNext()) {
		FileItem fileItem = (FileItem) params.next();
	
		if(fileItem.isFormField()) {	//파일 형식이 아니라면 
			String value = fileItem.getString("utf-8");
		} else {	//파일 형식이라면
			if(image_count < RoomPhotoBean.MAX) {
				String fileName = fileItem.getName();
				
				fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
				File file = new File(fileUploadPath + "/" + System.currentTimeMillis() + fileName);
				
				fileItem.write(file);
					
				image_files[image_count] = fileName;
				image_count++;
			} else
				break;
			
		}
	}
		
	roomPhoto.setR_files(image_files);
		
	LocalDate local = LocalDate.now();
	
	roomPhoto.setR_created(Date.valueOf(local));
	roomPhoto.setR_updated(Date.valueOf(local));
			
	RoomDBBean rb = RoomDBBean.getInstance();
	int roomPhotosuccess = rb.insertRoom_Photo(roomPhoto);
			
	if(roomPhotosuccess == 1) {
%>
		<script language=javascript>
			//alert("룸 포토 정보가 정상적으로 등록 되었습니다.");
			alert("정상적으로 등록 되었습니다.");
			document.location.href="room.jsp";	
		</script>
<%
	} else {
%>		
		<script language=javascript>
			//alert("룸 포토  정보 등록에 실패 했습니다. \n다시 시도해 주세요.");
			alert("정보 등록에 실패 했습니다. \n다시 시도해 주세요.");
			document.location.href="../roomRegistration/hostroom.jsp";	
		</script>
<%
	}
%>