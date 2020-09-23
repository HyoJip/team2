<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>�α��� �ϱ� - air_bnb</title>
    <link rel="stylesheet" href="login.css" />
     <link rel="stylesheet" href="base.css" />
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
          <input class="search_input" type="text" placeholder="�˻� �����ϱ�" />
          <i class="fas fa-search"></i>
        </li>
        <li class="header_profile">
          <i class="fas fa-bars"></i>
          <a class="profile_img" rel="profile_menu" href="login.jsp"></a>
        </li>
      </ul>
    </header>
   <div class="background">
    <div class="login">
      <h1>�α���</h1>
      <form method="post" action="login_Ok.jsp">
        <p><input type="text" name="email" placeholder="�̸���" /></p>
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
      <p>ȸ���� �ƴϽŰ���?&nbsp;&nbsp;<a href="memberjoin.jsp">ȸ������</a></p>
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
  </body>
</html>
    