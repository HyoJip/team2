<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 하기 - airbnb</title>
    <link rel="stylesheet" href="/resources/login.css">
</head>
<body>
    <div class="login">
        <h1>로그인</h1>
        <form method="post" action="">
          <p><input type="text" name="login" value="" placeholder="Email"></p>
          <p><input type="password" name="password" value="" placeholder="Password"></p>
          <p class="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me">
              아이디 저장
            </label>
          </p>
          <p class="submit"><input type="submit" name="commit" value="Login"></p>
        </form>
      </div>
      <div class="login-help">
        <p>회원이 아니신가요?&nbsp;&nbsp;<a href="#">회원가입</a></p>
      </div>
</body>
</html>