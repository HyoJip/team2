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
	
	if(check == 1){	//�α������� ��ġ
		String name = mb.getUsername();
		session.setAttribute("name", name);
		session.setAttribute("email", email);
		session.setAttribute("Member", "yes");
	
		response.sendRedirect("main.jsp");
	}else if(check == 0){	//��й�ȣ�� Ʋ����
%>
	<script>
		alert("��й�ȣ�� Ʋ���ϴ�.")
		history.go(-1);
	</script>
<%
	}else{
%>
	<script>
		alert("ȸ�������� �����ϴ�.")
		history.go(-1);
	</script>
<%			
	}
%>
