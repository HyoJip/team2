<%@page import="com.team2.airbnb.model.User"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% 
		List<User> userList = (List<User>) request.getAttribute("userList");
		for (User user: userList) {
	%>
			<%= user.getEmail()%>

	<%		} %>
</body>
</html>