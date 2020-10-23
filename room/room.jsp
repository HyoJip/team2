<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="room.*"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Date"%>
<%
	request.setCharacterEncoding("utf-8");
	RoomDBBean db = RoomDBBean.getInstance();
	ArrayList<RoomRoomBean> roomList = db.listRoom();
	ArrayList<RoomPhotoBean> roomPhotoList = db.listRoomPhoto();
	
	int rooms_id = 40;
%>    
<html lang="ko">
  <head>
  	<meta charset="UTF-8" />
    <link href="room.css" rel="stylesheet" />
  </head>
  <body>
    <div class="cont01">
      <div class="cont_box01">
        <div>
          <%
          	String[] loc = new String[RoomPhotoBean.MAX];	
          	String[] images = new String[RoomPhotoBean.MAX];
          	          
          	for(int i = 0; i < RoomPhotoBean.MAX; i++) {
          		loc[i] = "../images/";
          	}
          	          
          	for(int i = 0; i < roomPhotoList.size(); i++) {
          		if(rooms_id == roomPhotoList.get(i).getR_room_id()) {
          			 images = roomPhotoList.get(i).getR_files();
          			 for(int j = 0; j < RoomPhotoBean.MAX; j++) {
          				 loc[j] += images[j];
          			 }
          			 break;
          		}
          	}
          	
          %>    	 
          <img src= <%= loc[0] %> />
          <img src= <%= loc[1] %> />
          <img src= <%= loc[2] %> />
          <img src= <%= loc[3] %> />
          <img src= <%= loc[4] %> />
          <img src= <%= loc[5] %> />
        </div>
        
        <textarea rows="10" cols="60">나는 너의 수호천사!!!</textarea>
        
      </div>
    </div>
  </body>
</html>
