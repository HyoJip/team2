<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="member.*"%>
<!DOCTYPE html>
<html lang="en">
<head>
<%
	String email = session.getAttribute("email").toString();

memberDBBean db = memberDBBean.getInstance();
memberBean mb = db.getMember(email);
%>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/memberInfo.css" />
</head>
<body>
	<jsp:include page="../partial/header.jsp" />

	<form method="post" name="form" action="memberinfoOk.jsp">
		<div class="background">
			<div class="info">
				<h1>나의 정보 수정</h1>
				<p class="text">'*'표시는 필수로 입력해주세요.</p>
				<p>이름</p>
				<p class="line"><%=mb.getUsername()%></p>
				<p>이메일</p>
				<p class="line"><%=mb.getEmail()%></p>
				<p>비밀번호</p>
				<p class="line">
					<input type="password" name="password" /> '*' 8자리 이상 입력
				</p>
				<p>비밀번호 확인</p>
				<p class="line">
					<input type="password" name="passcheck" /> '*'
				</p>
				<p>생년월일</p>
				<p class="line"><%=mb.getBirthday()%></p>
				<div class="button">
					<input type="button" value="수정" onclick="update_check_ok(event)" />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="button"
						value="돌아가기" onclick="javascript:window.location='main.jsp'" />
				</div>
			</div>
		</div>
	</form>
	<jsp:include page="../partial/footer.jsp" />
	<!-- footer END -->
	<script src="/resources/js/script.js"></script>
</body>
</html>
