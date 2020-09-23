<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>

<%
	request.setCharacterEncoding("euc-kr");
	
	String email = request.getParameter("email");
	String password = request.getParameter("password");
	
	memberDBBean db = memberDBBean.getInstance();
	int check = db.login(email, password);
	memberBean mb = db.getMember(email);
	
	if(check == 1){	//로그인정보 일치
		String name = mb.getUsername();
		session.setAttribute("name", name);
		session.setAttribute("email", email);
		session.setAttribute("Member", "yes");
	
		response.sendRedirect("main.jsp");
	}else if(check == 0){	//비밀번호가 틀릴시
%>
	<script>
		alert("비밀번호가 틀립니다.")
		history.go(-1);
	</script>
<%
	}else{
%>
	<script>
		alert("회원정보가 없습니다.")
		history.go(-1);
	</script>
<%			
	}
%>
