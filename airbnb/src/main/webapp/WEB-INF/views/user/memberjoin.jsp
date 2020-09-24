<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/memberjoin.css" />
<title>에어비앤비 | 회원가입</title>
<script src="/resources/js/script.js"></script>
<!-- script를 사용하기 위해 작성 -->
</head>
<body>
	<jsp:include page="../partial/header.jsp" />
	<form method="post" action="memberjoinOk.jsp" name="form">
		<!-- memberjoinOk로 값을 넘겨준다. -->

		<div class="background">
			<div class="member">
				<h1>회 원 가 입</h1>
				<p>
					<input type="text" name="username" placeholder="이름" maxlength="20" />
				</p>
				<p>
					<input type="text" name="email" placeholder="이메일" maxlength="40" />
				</p>
				<p>
					<input type="password" name="password" placeholder="비밀번호"
						maxlength="20" /> *8~20자 내외로 입력해주세요
				</p>
				<p>
					<input type="password" name="passcheck" placeholder="비밀번호 확인" />
				</p>
				<p class="text">
					&nbsp;&nbsp;생년월일 <input type="date" name="birthday" />
					<!-- date 타입의 birth의 값을 받는다. -->
				</p>
				<p class="submit">
					<input type="button" value="회원가입" onclick="check_ok(event);" />
					<!-- script.js에 check_ok함수로 값을 체크한다. -->
				</p>
			</div>
			<div class="join-help">
				<p>
					이미 계정이 있습니까?&nbsp;&nbsp;<a
						href="javascript:window.location='login.jsp'">로그인 하기</a>
				</p>
			</div>
		</div>
	</form>

	<jsp:include page="../partial/footer.jsp" />
	<!-- footer END -->

</body>
</html>
