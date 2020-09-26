<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>에어비앤비 | 로그인</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/login.css" />
<script src="https://kit.fontawesome.com/ad755395c3.js"
	crossorigin="anonymous"></script>
</head>
<body>
	<%
		if (request.getMethod().equalsIgnoreCase("GET")) {
	%>
	<jsp:include page="../partial/header.jsp" />
	<div class="background">
		<div class="login">
			<h1>로그인</h1>
			<form name="loginForm" method="post" action="">
				<p>
					<input type="text" id="email" name="email" placeholder="이메일" />
				</p>
				<p>
					<input type="password" id="pw" name="password" placeholder="비밀번호" />
				</p>
				<p class="remember_me">
					<label> <input type="checkbox" name="remember_me"
						id="remember_me" /> 아이디 저장
					</label>
				</p>
				<p class="submit">
					<input type="submit" name="commit" value="로그인" onclick="loginCheck(event)"/>
				</p>
			</form>
		</div>
		<div class="login-help">
			<p>
				회원이 아니신가요?&nbsp;&nbsp;<a href="/join">회원가입</a>
			</p>
		</div>
	</div>
	<jsp:include page="../partial/footer.jsp" />
	<!-- footer END -->
	<%
		} else if (request.getMethod().equalsIgnoreCase("POST")) {
	%>
		<script>
			alert("잘못된 이메일 또는 비밀번호입니다.");
			history.go(-1);
		</script>
	<%
			}
	%>
	<script>
		const loginCheck = (event) => {
			event.preventDefault();
			if (document.querySelector("#email").value == "") {
				alert("이메일을 입력하세요");
				return;
			}
			if (document.querySelector("#pw").value == "") {
				alert("비밀번호를 입력하세요");
				return;
			}
			document.loginForm.submit();
		}
	</script>
</body>
</html>
