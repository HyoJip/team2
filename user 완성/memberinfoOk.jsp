<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>
<% request.setCharacterEncoding("euc-kr"); %>

<jsp:useBean id="bean" class="member.memberBean"/>
<jsp:setProperty property="*" name="bean"/>

<%
	String email=(String)session.getAttribute("email");
	bean.setEmail(email);
	
	memberDBBean db = memberDBBean.getInstance();
	int re = db.updateMember(bean);
	
	if(re == 1){		
%>
	<script>
		alert("회원정보가 수정되었습니다.");
		document.location.href="main.jsp";
	</script>
<%
	}else{
		
%>
	<script>
		alert("회원정보 수정 실패 \n다시 시도해 주세요.");
		history.go(-1);
	</script>
<%
	}
%>
