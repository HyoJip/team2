<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>
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
    <link rel="stylesheet" href="memberinfo.css" />
    <link rel="stylesheet" href="base.css" />
    <script language="JavaScript" src="script.js" charset="utf-8"></script>
  </head>
  <body>
    <script
        src="https://kit.fontawesome.com/ad755395c3.js"
        crossorigin="anonymous"
      ></script>
      <header class="body_header">
        <ul>
          <li class="airbnb_icon">
            <a href="main.jsp"><i class="fab fa-airbnb"></i>airbnb</a>
          </li>
          <li class="room_search">
            <input
              class="search_input"
              type="text"
              placeholder="�˻� �����ϱ�"
            />
            <i class="fas fa-search"></i>
          </li>
          <li class="header_profile">
            <i class="fas fa-bars"></i>
            <a class="profile_img" rel="profile_menu" href="login.jsp"></a>
          </li>
        </ul>
      </header>
      
    <form method="post" name="form" action="memberinfoOk.jsp">
      <div class="background">
      <div class="info">
        <h1>���� ���� ����</h1>
        <p class="text">'*'ǥ�ô� �ʼ��� �Է����ּ���.</p>
        <p>�̸�</p>
        <p class="line"><%=mb.getUsername()%></p>
        <p>�̸���</p>
        <p class="line"><%=mb.getEmail() %></p>
        <p>��й�ȣ</p>
        <p class="line"><input type="password" name="password" /> '*' 8�ڸ� �̻� �Է�</p>
        <p>��й�ȣ Ȯ��</p>
        <p class="line"><input type="password" name="passcheck" /> '*'</p>
        <p>�������</p>
        <p class="line"><%=mb.getBirthday() %></p>
        <div class="button">
          <input type="button" value="����" onclick="update_check_ok(event)" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="���ư���" onclick="javascript:window.location='main.jsp'" />
        </div>
      </div>
      </div>
      
      <footer class="body_footer">
        <div class="footer_wrap">
          <p class="company_info">
            <span class="right">c. 2020 Airbnb, Inc. All rights reserved</span>
            <span class="project">team2 airbnb clone project</span>
          </p>
          <p class="page_config">
            <i class="fas fa-globe-asia"></i>
            <span class="language">�ѱ���(KR)</span>
            <small>��</small>
            <span class="currency">KRW</span>
            <a target="blank" href="https://github.com/HyoJip/team2"
              ><i class="fab fa-github"></i
            ></a>
            <a target="blank" href="http://www.btc.ac.kr/"
              ><i class="fas fa-school"></i
            ></a>
            <a target="blank" href="https://www.airbnb.co.kr/"
              ><i class="fab fa-airbnb"></i
            ></a>
          </p>
        </div>
      </footer>
      <!-- footer END -->
    </form>
  </body>
</html>
    