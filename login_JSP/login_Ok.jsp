<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>

<% 	request.setCharacterEncoding("euc-kr");
	
	String id = request.getParameter("email");
	String password = request.getParameter("password");
	
	memberDBBean manager=memberDBBean.getInstance();
	int check = manager.userCheck(id, password);
	memberBean mb = manager.getMember(id);
	
	if(mb==null){
%>
	<script>
		alert("�������� �ʴ� ȸ��");
		history.go(-1);
	</script>
<%
	}else{
		String name=mb.getUsername();
		if(check==1){
			session.setAttribute("email", id);
			session.setAttribute("username", name);
			session.setAttribute("Member", "yes");
			
			response.sendRedirect("main.jsp");
		}else if(check==0){
%>		
		<script>
			alert("��й�ȣ�� ���� �ʽ��ϴ�.");
			history.go(-1);
		</script>
<%
		}else{
%>
		<script>
			alert("���̵� ���� �ʽ��ϴ�.");
			history.go(-1);
		</script>
<%
		}
	}
%>