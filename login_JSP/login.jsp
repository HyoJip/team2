<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>�α��� �ϱ� - airbnb</title>
    <link rel="stylesheet" href="login.css" />
  </head>
  <body>
    <div class="login">
      <h1>�α���</h1>
      <form method="post" action="login_Ok.jsp">
        <p><input type="text" name="login" placeholder="�̸���" /></p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="��й�ȣ"
          />
        </p>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me" />
            ���̵� ����
          </label>
        </p>
        <p class="submit">
          <input type="submit" name="commit" value="�α���" />
        </p>
      </form>
    </div>
    <div class="login-help">
      <p>ȸ���� �ƴϽŰ���?&nbsp;&nbsp;<a href="javascript:window.location='memberjoin.jsp'">ȸ������</a></p>
    </div>
  </body>
</html>
    