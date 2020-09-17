<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="memberinfo.css" />
  </head>
  <body>
    <form method="post" name="form" action="memberUpdateOk.jsp">
      <div class="info">
        <h1>나의 정보 수정</h1>
        <p class="text">'*'표시는 필수로 입력해주세요.</p>
        <p>이름</p>
        <p class="line">%name%</p>
        <p>이메일</p>
        <p class="line">%email%</p>
        <p>비밀번호</p>
        <p class="line"><input type="password" name="pass" /> '*'</p>
        <p>비밀번호 확인</p>
        <p class="line"><input type="password" name="passcheck" /> '*'</p>
        <p>생년월일</p>
        <p class="line"><input type="date" name="birth" /></p>
        <div class="button">
          <input type="button" value="수정" onclick="update_check_ok()" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="돌아가기" onclick="" />
        </div>
      </div>
    </form>
  </body>
</html>
    