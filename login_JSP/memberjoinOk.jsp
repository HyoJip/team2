<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>

<% request.setCharacterEncoding("euc-kr"); %>

<jsp:useBean id="bean" class="member.memberBean"/>
<jsp:setProperty property="*" name="bean"/>

<%
	memberDBBean manager = memberDBBean.getInstance();
		if(manager.confirmID(bean.getEmail())==1){
%>
	<script language=javascript>
		alert("�ߺ��� ���̵� �����մϴ�.");
		history.back();
	</script>
<%
	}else{
		int re = manager.insertMember(bean);
		
		if(re == 1){
%>
			<script language=javascript>
				alert("ȸ������ �Ϸ�. \n�α��� ���������� �α��� ���ּ���.");
				document.location.href="login.jsp";
			</script>
<%
		}else{
%>		
			<script language=javascript>
				alert("ȸ�����Կ� ���� �߽��ϴ�. \n�ٽ� �õ��� �ּ���.");
				document.location.href="memberjoin.jsp";
			</script>
<%
		}
	}
%>