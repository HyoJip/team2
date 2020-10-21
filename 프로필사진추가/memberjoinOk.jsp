<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="member.*" %>

<% request.setCharacterEncoding("euc-kr"); %>

<jsp:useBean id="bean" class="member.memberBean"/>
<jsp:setProperty property="*" name="bean"/>

<%
	String birthday = request.getParameter("birthday");
	String userphoto = request.getParameter("userphoto");	//프로필사진을 파라미터로 받아옴
	bean.setBirthday(birthday);
	bean.setUserphoto(userphoto);
	memberDBBean manager = memberDBBean.getInstance();
	if(manager.confirmID(bean.getEmail())== 1){
%>
	<script language=javascript>
		alert("중복된 아이디가 존재합니다.");
		history.back();
	</script>
<%
	}else{
		int isSucess = manager.insertMember(bean);
		
		if(isSucess == 1){
%>
			<script language=javascript>
				alert("회원가입 완료. \n로그인 페이지에서 로그인 해주세요.");
				document.location.href="login.jsp";
			</script>
<%
		} else {
%>		
			<script language=javascript>
				alert("회원가입에 실패 했습니다. \n다시 시도해 주세요.");
				document.location.href="memberjoin.jsp";
			</script>
<%
		}
	}
%>