<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//int b_id = Integer.parseInt(request.getParameter("b_id"));
%>

<html>
	<head>
		<script type="text/javascript" src="roomUpdateScript.js" charset="utf-8"></script>
	</head>
	<body>
		<center>
			<h1>룸 삭 제 하 기</h1>
			<form method="post" name="form" action="roomDeleteOk.jsp">
				  <table>
				  	<tr height="50">
				  		<td colspan="2" align="left">
				  			<b>>> 암호를 입력하세요. <<</b>
				  		</td>
				  	</tr>
				  	<tr>
				  		<td width="80">
				  			암&nbsp;&nbsp;호
				  		</td>
				  		<td>
				  			<input type="password" name="b_pwd" maxlength="12" size="12">
				  		</td>
				  	</tr>
				  	<tr height="50" align="center">
				  		<td colspan="2">
				  			<input type="button" value="삭제" 
				  				onclick="delete_ok()">&nbsp;&nbsp;&nbsp;
				  			<input type="button" value="취소" 
				  			onclick="location.href='roomUpdate.jsp'">
				  		</td>
				  	</tr>
				  </table>
			</form>
		</center>
	</body>
</html>


















