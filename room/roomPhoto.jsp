﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RoomPhoto등록</title>
</head>

<body>
    <form name="form" method="post" enctype="multipart/form-data" action="roomPhotoOk.jsp">
        <script charset="utf-8">
function check_ok() {
  event.preventDefault();
  
  if (document.form.r_caption.value == "") {
	  	alert("숙소 설명을 입력해주세요");
	  	form.r_caption.focus();
	  	return;
  }
  
  if (document.form.r_file.value == "") {
	   	alert("이미지를 넣어주세요");
	   	form.r_file.focus();
	   	return;
  }
    
  document.form.submit();
}
</script>
        <div class="background">
            <div class="host">
                <h1>Room Photo 등록하기</h1>
                <p class="headtext">
                    - 룸을 등록하세요 . -
                </p>
                <p>주소
                    <a></br>룸에 대해 소개해 주세요.</a>
                </p>
                <div class="button">
                    <input type="button" value="다음" onclick="check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="돌아가기" onclick="javascript:window.location='roomPhoto.jsp'" />
                </div>  

            </div>
        </div>
        <!-- footer END -->
    </form>
</body>
</html>
    