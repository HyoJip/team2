<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="memberjoin.css" />
    <title>ȸ������ - airbnb</title>
  </head>
  <body>
    <form method="post" action="memberjoinOk.jsp" name="form">
    <div class="member">
      <h1>ȸ �� �� ��</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="�̸�"
            maxlength="20"
          />
        </p>
        <p>
          <input
            type="text"
            name="email"
            placeholder="�̸���"
            maxlength="40"
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="��й�ȣ"
            maxlength="20"
          />
          *8~20�� ���ܷ� �Է����ּ���
        </p>
        <p>
          <input
            type="password"
            name="passcheck"
            placeholder="��й�ȣ Ȯ��"
          />
        </p>
        <p class="text">
          &nbsp;&nbsp;�������
          <input type="date" name="birth" placeholder="�������" />
        </p>
        <p class="submit">
          <input type="button" value="ȸ������" onclick="check_ok();" />
        </p>
      </form>
    </div>
    <div class="join-help">
      <p>
        �̹� ������ �ֽ��ϱ�?&nbsp;&nbsp;<a
          href="javascript:window.location='login.jsp'"
          >�α��� �ϱ�</a
        >
      </p>
    </div>
  </body>
</html>
    