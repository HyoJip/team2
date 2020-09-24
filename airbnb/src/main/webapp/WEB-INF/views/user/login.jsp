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
<script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
</head>
<body>
	<jsp:include page="../partial/header.jsp" />
	<div class="background">
		<div class="login">
			<h1>로그인</h1>
			<form method="post" action="login_Ok.jsp">
				<p>
					<input type="text" name="email" placeholder="이메일" />
				</p>
				<p>
					<input type="password" name="password" placeholder="비밀번호" />
				</p>
				<p class="remember_me">
					<label> <input type="checkbox" name="remember_me"
						id="remember_me" /> 아이디 저장
					</label>
				</p>
				<p class="submit">
					<input type="submit" name="commit" value="로그인" />
				</p>
			</form>
		</div>
		<div class="login-help">
			<p>
				회원이 아니신가요?&nbsp;&nbsp;<a href="memberjoin.jsp">회원가입</a>
			</p>
		</div>
	</div>

	<jsp:include page="../partial/footer.jsp" />
	<!-- footer END -->
</body>
</html>
