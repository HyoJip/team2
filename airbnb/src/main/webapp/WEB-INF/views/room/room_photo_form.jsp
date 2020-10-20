<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에어비앤비 | 숙소 사진 등록</title>
</head>
<link rel="stylesheet" href="/resources/css/base.css" />
<body>
	<jsp:include page="../partial/header.jsp" />
	<main class="main_wrap">
		<h1>사진을 더하면 숙소를 실감나게 보여줄 수 있습니다.</h1>
		<p>게스트가 이용할 수 있는 구역의 사진을 올리세요. 언제든 사진을 추가할 수 있습니다.
		<form name="form" method="post" enctype="multipart/form-data"
			action="roomPhotoOk.jsp">
			<div class="background">
				<textarea name="caption" id="caption" cols="60" rows="10"
					maxlength="80" placeholder="80자 내외로 입력해주세요."></textarea>
				<input type="file" name="file" id="images" multiple required />
				<div class="button">
					<input type="button" value="다음" onclick="check_ok()" />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="button"
						value="돌아가기" onclick="javascript:window.location='roomPhoto.jsp'" />
				</div>
			</div>
		</form>
	</main>
	<jsp:include page="../partial/footer.jsp" />
	<script>
		function check_ok() {
			event.preventDefault();

			if (document.form.caption.value == "") {
				alert("숙소 설명을 입력해주세요");
				form.caption.focus();
				return;
			}

			if (document.form.file.value == "") {
				alert("이미지를 넣어주세요");
				form.file.focus();
				return;
			}

			document.form.submit();
		}
	</script>
</body>
</html>