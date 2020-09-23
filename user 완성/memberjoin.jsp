<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="memberjoin.css" />
    <link rel="stylesheet" href="base.css" />
    <title>ȸ������ - air_bnb</title>
     <script language="JavaScript" src="script.js" charset="utf-8"></script>	<!-- script�� ����ϱ� ���� �ۼ� -->
  </head>
  <body>
    <form method="post" action="memberjoinOk.jsp" name="form">	<!-- memberjoinOk�� ���� �Ѱ��ش�. -->
     <script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
    <header class="body_header">
      <ul>
        <li class="airbnb_icon"><a href="first_main"><i class="fab fa-airbnb"></i>airbnb</a></li>
        <li class="room_search">
          <input class="search_input" type="text" placeholder="�˻� �����ϱ�">
          <i class="fas fa-search"></i>
        </li>
        <li class="header_profile">
          <i class="fas fa-bars"></i>
          <a class="profile_img" rel="profile_menu" href="login.jsp"></a>
        </li>
      </ul>
    </header>
    
	<div class="background">
	<div class="member">
      <h1>ȸ �� �� ��</h1>
        <p>
          <input type="text" name="username" placeholder="�̸�" maxlength="20"/>
        </p>
        <p>
          <input type="text" name="email" placeholder="�̸���" maxlength="40"/>
        </p>
        <p>
          <input type="password" name="password" placeholder="��й�ȣ"  maxlength="20" />
          *8~20�� ���ܷ� �Է����ּ���
        </p>
        <p>
          <input type="password" name="passcheck" placeholder="��й�ȣ Ȯ��"/>
        </p>
        <p class="text">
        	&nbsp;&nbsp;�������
          <input type="date" name="birthday"/>	<!-- date Ÿ���� birth�� ���� �޴´�. -->
        </p>
        <p class="submit">
          <input type="button" value="ȸ������" onclick="check_ok(event);" />	<!-- script.js�� check_ok�Լ��� ���� üũ�Ѵ�. -->
        </p>
   		</div>
    <div class="join-help">
      <p>
        �̹� ������ �ֽ��ϱ�?&nbsp;&nbsp;<a
          href="javascript:window.location='login.jsp'"
          >�α��� �ϱ�</a>
      </p>
   	</div>
   	</div>
  </form>
	 
	 <footer class="body_footer">
      <div class="footer_wrap">
        <p class="company_info"><span class="right">c. 2020 Airbnb, Inc. All rights reserved</span>
          <span class="project">team2 airbnb clone project</span>
        </p>
        <p class="page_config">
          <i class="fas fa-globe-asia"></i>
          <span class="language">�ѱ���(KR)</span>
          <small>��</small>
          <span class="currency">KRW</span>
          <a target="blank" href="https://github.com/HyoJip/team2"><i class="fab fa-github"></i></a>
          <a target="blank" href="http://www.btc.ac.kr/"><i class="fas fa-school"></i></a>
          <a target="blank" href="https://www.airbnb.co.kr/"><i class="fab fa-airbnb"></i></a>
        </p>
      </div>
    </footer>
    <!-- footer END -->
   
  </body>
</html>
    