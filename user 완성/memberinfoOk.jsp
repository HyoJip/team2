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
		alert("ȸ�������� �����Ǿ����ϴ�.");
		document.location.href="main.jsp";
	</script>
<%
	}else{
		
%>
	<script>
		alert("ȸ������ ���� ���� \n�ٽ� �õ��� �ּ���.");
		history.go(-1);
	</script>
<%
	}
%>
