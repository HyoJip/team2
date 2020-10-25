<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에어비앤비 | 숙소 사진 등록</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/room/roomphoto.css">
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
	<%
		if (request.getMethod().equalsIgnoreCase("POST")) {
			int isValid = (int) request.getAttribute("isValid");
			if (isValid == 1) {
	%>
		<script>
			alert("${msg}");
			document.location.href="/room/${roomId}";	
		</script>
	<%
			} else {
	%>
		<script>
			alert("${msg}");
		</script>	
	<%
			}
		}
	%>
	<jsp:include page="../partial/header.jsp" />
	<form name="form" method="post" enctype="multipart/form-data" action="/room/create/photo">
        <div class="background">
            <div class="host">
                <h1>숙소 사진 등록하기</h1>
                <p class="headtext">
                    - 사진을 등록하세요  -
                </p>
                <p class="subtext">
                    *사진은 최대 5장 등록 가능합니다.
                </p>
                <div class="img">
                    <input type="file" name="file" accept="image/*" multiple onchange="fileInfo(this)" /><br>
                    <div id="img_box"></div> 
                </div>       
                <div class="button">
                    <input type="button" value="다음" onclick="check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="다시 작성" onclick="javascript:window.location=''"/>
                </div>  
            </div>
        </div>
        <input type="hidden" name="roomId" value="${roomId}"> 
    </form>
	<jsp:include page="../partial/footer.jsp" />
	<script>
		function check_ok() {
			event.preventDefault();
			if (document.form.file.value == "") {
				alert("이미지를 최소 하나 넣어주세요");
			   	return;
		  }
		  document.form.submit();
		}
		
        function fileInfo(f) {
        	var file = f.files; 
           	$('#img_box').text("");
           	
    
            for(var i=0; i<file.length; i++) {
	           	$('#img_box').after("<div class='loading'></div>");
            	
                var reader = new FileReader();
                reader.onload = function(rst) {
                	$('.loading').remove();
                    $('#img_box').append('<img src="' + rst.target.result + '"style="width:259px; height:197px;">');
                }
                reader.readAsDataURL(file[i]);
            }         
        }
	</script>
</body>
</html>