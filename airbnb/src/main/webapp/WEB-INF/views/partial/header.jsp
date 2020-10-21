<%@page import="com.team2.airbnb.model.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="https://kit.fontawesome.com/ad755395c3.js"
	crossorigin="anonymous"></script>
<header class="body_header">
	<ul>
		<li class="airbnb_icon"><a href="/"><i class="fab fa-airbnb"></i>airbnb</a></li>
		<li class="room_search">
			<input class="search_input" type="text" id="keyword" placeholder="검색 시작하기">
			<i class="fas fa-search" id="searchBtn"></i>
		</li>
		<li class="header_profile" id="userNav">
			<i class="fas fa-bars"></i>
			<i class="fas fa-user-circle profile_img"></i>
            <ul class="subnav" id="subNav">
    <%
		User user = (User) session.getAttribute("login");
    	if (user == null) {
   	%>
		        <li class="submenu"><a href="/login">로그인</a></li>
                <li class="submenu"><a href="/join">회원 가입</a></li>
                <li class="submenu" class="become_host_btn"><a href='/room/create'>숙소 호스트 되기</a></li>
    <%
    	} else {
	%>
                <li class="submenu"><a>메시지</a></li>
                <li class="submenu"><a href="/user/<%=user.getId()%>/reservations">여행</a></li>
    <%
    				if (user.getIsHost() == 1) {    					
    					out.print("<li class='submenu become_host_btn'><a href='/host/" + user.getId() + "/reservations'>내 숙소 예약 관리</a></li>");
    				} else {
    					out.print("<li class='submenu become_host_btn'><a href='/room/create'>숙소 호스트 되기</a></li>");
    				}
    %>
                <li class="submenu"><a href="/user/update">회원 정보 수정</a></li>
                <li class="submenu" onclick="document.logoutForm.submit()"><form name="logoutForm" action="/logout" method="POST">로그아웃</form></li>
    <%
    	}
    %>
            </ul>
		</li>
	</ul>
</header>

<script>
	const navDisplay = (() => {

        const onClickUserNav = () => {
            document.querySelector("#subNav").style.display = "flex";
        }

        const onClickDocumnet = (event) => {
        	const target = event.target.closest("#userNav");
            if (target !== null) return;
            document.querySelector("#subNav").style.display = "none";
        }
        
        const onClickSearchBtn = () => {
        	const keyword = document.querySelector("#keyword").value;
        	if (keyword == "" || keyword == null) return;
        	location.href = "/s/" + keyword;        		
        }
        
        const onKeyDownSearchBtn = (event) => {
        	const keyword = document.querySelector("#keyword").value;
        	if (event.keyCode === 13 || event.which === 13) {
	        	location.href = "/s/" + keyword;        		
        	} 
        }

		document.querySelector("#userNav").addEventListener("click", onClickUserNav);
        document.addEventListener("click", onClickDocumnet);
        document.querySelector("#searchBtn").addEventListener("click", onClickSearchBtn);
        document.querySelector("#keyword").addEventListener("keydown", onKeyDownSearchBtn);
	})();
</script>