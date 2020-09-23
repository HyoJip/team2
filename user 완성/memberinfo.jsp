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
              placeholder="검색 시작하기"
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
        <h1>나의 정보 수정</h1>
        <p class="text">'*'표시는 필수로 입력해주세요.</p>
        <p>이름</p>
        <p class="line"><%=mb.getUsername()%></p>
        <p>이메일</p>
        <p class="line"><%=mb.getEmail() %></p>
        <p>비밀번호</p>
        <p class="line"><input type="password" name="password" /> '*' 8자리 이상 입력</p>
        <p>비밀번호 확인</p>
        <p class="line"><input type="password" name="passcheck" /> '*'</p>
        <p>생년월일</p>
        <p class="line"><%=mb.getBirthday() %></p>
        <div class="button">
          <input type="button" value="수정" onclick="update_check_ok(event)" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="돌아가기" onclick="javascript:window.location='main.jsp'" />
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
            <span class="language">한국어(KR)</span>
            <small>￦</small>
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
    