<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>에어비앤비</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/main.css" />
</head>
<body>
   <%@ include file="./partial/header.jsp"%>
   <div class="cont01">
      <div class="cont01_text">
         <h2>이제, 여행은 가까운 곳에서.</h2>
         <p>새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를 보거나, 휴식할 수 있는 가까운 숙소를 찾아보세요.</p>
         <a href="/room">여행지 둘러보기</a>
      </div>
   </div>
   <jsp:include page="./partial/footer.jsp" />
   <!-- footer END -->
</body>
</html>