<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<%
	String name = (String)session.getAttribute("name");	//���������� ó���� �Ǹ� ���ǰ��� ���̵� ��´�.
%>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="mainbase.css" />
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
  </head>
 <body>
   <header>
<% 
	if(session.getAttribute("name")==null){	//������ �������� �ʾ��� ��� ���
%>
	<form method="post" action="login.jsp">
		<input type="submit" value="�α����ϱ�">
	</form>
<%
	}else{				//������ �����Ǿ��� ��� ��� 
%>
	<form method="post" action="logOut.jsp">
		<p>�ȳ��ϼ���. <%= name %>��</p>
			<input type="submit" value="�α׾ƿ�" >
			<input type="button" value="ȸ������" onclick="location='memberinfo.jsp'"/>
	</form>
<%
	}
%>	
   </header>
    <!-- ��� �޴��� END-->
    
    <div class="cont01">
      <div class="cont01_text">
        <h2>���� ������ ����� ������</h2>
        <p>
          ����� ���� ������ �Ƹ��ٿ���</br>
          �߰��ϴ� ���ٸ� �ް��� ��ܺ�����.
        </p>
      </div>
    </div>
    <!--cont01 END-->

    <div class="cont02">
      <h2>�޴� ����</h2>
      <div class="box">
        <div class="box1">
          <a href="#">	<!-- reservation������ ���� -->
            <img src="img/reservation.jpg" alt="���ҿ����ϱ�" />
            <dl>
              <dt>���ҿ���</dt>
              <dd>������ ���ݿ� �����ϼ���</dd>
            </dl>
          </a>
        </div>
        <div class="box2">
          <a href="#">	<!-- list������ ���� -->
            <img src="img/main_1.jpg" alt="���Ҹ���Ʈ" />
            <dl>
              <dt>���Ҹ���Ʈ</dt>
              <dd>�پ��� ������ ã�ƺ�����</dd>
            </dl>
          </a>
        </div>
      </div>
      <!--box END-->
    </div>
    <!--cont02 END-->
    
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
    