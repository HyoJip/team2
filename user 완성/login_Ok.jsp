<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@ page
import="member.*" %> <% request.setCharacterEncoding("UTF-8"); String email =
request.getParameter("email"); String password = request.getParameter("password"); memberDBBean db =
memberDBBean.getInstance(); int check = db.login(email, password); memberBean mb =
db.getMember(email); if(check == 1){ String name = mb.getUsername(); session.setAttribute("name",
name); session.setAttribute("email", email); session.setAttribute("Member", "yes");
response.sendRedirect("main.jsp"); }else if(check == 0){ %>
<script>
	alert("��й�ȣ�� Ʋ���ϴ�.");
	history.go(-1);
</script>
<% }else{ %>
<script>
	alert("ȸ�������� �����ϴ�.");
	history.go(-1);
</script>
<% } %>
