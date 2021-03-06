<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>에이비앤비 | 회원 정보 수정</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/memberInfo.css" />
</head>
<body>
	<%@ include  file="../partial/header.jsp"%>

	<form method="POST" name="form" action="" enctype="multipart/form-data">
		<div class="background">
			<div class="info">
				<h1>나의 정보 수정</h1>
				<p class="text">'*'표시는 필수로 입력해주세요.</p>
				<p>이름</p>
				<p class="line"><input class="readonly" type="text" name="username" value="${user.username}" readonly/></p>
				<p>이메일</p>
				<p class="line"><input class="readonly" type="text" name="email" value="${user.email}" readonly/></p>
				<p>비밀번호</p>
				<p class="line">
					<input type="password" name="password" /> '*' 8자리 이상 입력
				</p>
				<p>비밀번호 확인</p>
				<p class="line">
					<input type="password" name="passcheck" /> '*'
				</p>
				<p>생년월일</p>
				<p class="line">${user.birthDay}</p>
				<p>프로필 사진</p>
        		<p class="line">
		        <img alt="your image" class="photo_preview" src="http://www.washaweb.com/tutoriaux/fileupload/imgs/image-temp-220.png">
		        <span class="input_file">
		            <label>컴퓨터에 있는 사진을 업로드해주세요.</label>
	        		<input type="file" name="file" onchange="readURL(this);"/>		            
		        </span>
        		</p>
				<div class="button">
					<input type="button" value="수정" onclick="update_check_ok(event)" />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="button" value="돌아가기" onclick="javascript:window.location='/'" />
				</div>
			</div>
		</div>
	</form>
<%
	if (request.getMethod().equalsIgnoreCase("POST")) {
		int isValid = Integer.parseInt(request.getAttribute("isValid").toString());
		if (isValid == 1) {
%>
		<script>
			alert("회원정보가 수정되었습니다.");
			const form = document.createElement("form");
			form.setAttribute("method", "POST");
			form.setAttribute("action", "/logout");
			document.body.appendChild(form);
			setTimeout(form.submit(), 1000);
		</script>
<% 		} else { %>
		<script>
			alert("회원정보 수정 실패 \n다시 시도해 주세요.");
			document.location.href="/user/update";
		</script>
<%
		}
	}
%>
	<jsp:include page="../partial/footer.jsp" />
	<!-- footer END -->
	<script src="/resources/js/script.js"></script>
</body>
</html>
