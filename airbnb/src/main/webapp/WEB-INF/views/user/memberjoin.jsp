<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/resources/memberjoin.css" />
    <title>회원가입 - airbnb</title>
    <script language="JavaScript" src="joinscript.js" charset="utf-8"></script>
  </head>
  <body>
    <form method="post" action="memberjoinOk.jsp" name="form">
    <div class="member">
      <h1>회 원 가 입</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="이름"
            maxlength="20"
          />
        </p>
        <p>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            maxlength="40"
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            maxlength="20"
          />
          *8~20자 내로 입력하세요.
        </p>
        <p>
          <input
            type="password"
            name="passcheck"
            placeholder="비밀번호 확인"
          />
        </p>
        <p class="text">
          &nbsp;&nbsp;생년월일
          <input type="date" name="birth" placeholder="생년월일" />
        </p>
        <p class="submit">
          <input type="button" value="회원가입" onclick="check_join()" />
        </p>
    	</div>
      </form>
    <div class="join-help">
      <p>
        이미 계정이 있습니까?&nbsp;&nbsp;<a
          href="/login"
          >로그인 하기</a>
      </p>
    </div>
  </body>
</html>
    