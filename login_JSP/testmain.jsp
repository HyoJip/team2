<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	if(session.getAttribute("Member") == null){
%>
		<jsp:forward page="login.jsp"/>
<%
	}

	String id = (String)session.getAttribute("email");
	String name = (String)session.getAttribute("name");
%>
<html>
	<head>
	</head>
	<body>
		<table border = "1" ailgn = "center">
			<form method="post" action="logOut.jsp">
				<tr height="30">
					<td>
						�ȳ��ϼ���. <%= name %>(<%= id %>)��
					</td>
				</tr>
				<tr height="30">
					<td colspan="2" ailgn="center">
						<input type="submit" value="�α׾ƿ�">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="button" value="ȸ����������" onclick="">
					</td>
				</tr>
			</form>
		</table>
	</body>
</html>