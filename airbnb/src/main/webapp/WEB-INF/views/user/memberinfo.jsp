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
        <h1>���� ���� ����</h1>
        <p class="text">'*'ǥ�ô� �ʼ��� �Է����ּ���.</p>
        <p>�̸�</p>
        <p class="line">%name%</p>
        <p>�̸���</p>
        <p class="line">%email%</p>
        <p>��й�ȣ</p>
        <p class="line"><input type="password" name="pass" /> '*'</p>
        <p>��й�ȣ Ȯ��</p>
        <p class="line"><input type="password" name="passcheck" /> '*'</p>
        <p>�������</p>
        <p class="line"><input type="date" name="birth" /></p>
        <div class="button">
          <input type="button" value="����" onclick="update_check_ok()" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="���ư���" onclick="" />
        </div>
      </div>
    </form>
  </body>
</html>
    