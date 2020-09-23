<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="memberjoin.css" />
    <link rel="stylesheet" href="base.css" />
    <title>회원가입 - air_bnb</title>
     <script language="JavaScript" src="script.js" charset="utf-8"></script>	<!-- script를 사용하기 위해 작성 -->
  </head>
  <body>
    <form method="post" action="memberjoinOk.jsp" name="form">	<!-- memberjoinOk로 값을 넘겨준다. -->
     <script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
    <header class="body_header">
      <ul>
        <li class="airbnb_icon"><a href="first_main"><i class="fab fa-airbnb"></i>airbnb</a></li>
        <li class="room_search">
          <input class="search_input" type="text" placeholder="검색 시작하기">
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
      <h1>회 원 가 입</h1>
        <p>
          <input type="text" name="username" placeholder="이름" maxlength="20"/>
        </p>
        <p>
          <input type="text" name="email" placeholder="이메일" maxlength="40"/>
        </p>
        <p>
          <input type="password" name="password" placeholder="비밀번호"  maxlength="20" />
          *8~20자 내외로 입력해주세요
        </p>
        <p>
          <input type="password" name="passcheck" placeholder="비밀번호 확인"/>
        </p>
        <p class="text">
        	&nbsp;&nbsp;생년월일
          <input type="date" name="birthday"/>	<!-- date 타입의 birth의 값을 받는다. -->
        </p>
        <p class="submit">
          <input type="button" value="회원가입" onclick="check_ok(event);" />	<!-- script.js에 check_ok함수로 값을 체크한다. -->
        </p>
   		</div>
    <div class="join-help">
      <p>
        이미 계정이 있습니까?&nbsp;&nbsp;<a
          href="javascript:window.location='login.jsp'"
          >로그인 하기</a>
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
          <span class="language">한국어(KR)</span>
          <small>￦</small>
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
    