<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>에어비앤비 | 숙소 수정</title>
<link rel="stylesheet" href="/resources/css/base.css" />
<link rel="stylesheet" href="/resources/css/user/hostCreate.css" />
<script
	src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>

<body>
<%
	if(request.getMethod().equalsIgnoreCase("POST")) {
%>
	<script>
		alert("숙소 등록에 실패 했습니다. \n다시 시도해 주세요.");
		location.href = "/";
	</script>
<%
	}
%>
	<jsp:include page="../partial/header.jsp" />
	<form method="post" name="form" action="">
		<div class="background">
			<div class="host">
				<h1>숙소 수정하기</h1>
				<p class="headtext">- 다음지역을 호스팅하고 나의 월 수입을 올리세요. -</p>
				<p>
					숙소 제목 <a> </br>숙소의 특징과 장점을 강조하는 제목으로 </br>게스트의 관심을 끌어보세요.
					</a>
				</p>
				<p class="line">
					<input type="text" name="name" value="${room.name}"/>
				</p>
				<p>
					주소 <a></br>게스트에게 자세한 주소를 알려주세요.</a>
				</p>
				<div class="addr">
					<input type="text" name="address1" id="address" value="${addrArr[0]}" placeholder="주소" readonly style="margin-left: 35px;" /> 
					<input type="text" name="address2" id="extraAddress" value="${addrArr[1]}" placeholder="참고항목" readonly style="margin-left: 10px;" margin-top: 10px;"/> 
					<input type="text" name="address3" id="detailAddress" value="${addrArr[2]}" placeholder="상세주소" style="margin-left: 35px; margin-top: 10px;" />
				</div>
				<input type="button" onclick="execDaumPostcode()" value="주소 찾기"
					style="margin-top: 20px; margin-left: 250px;" />

				<p class="line"></p>

				<p>
					가격 <a></br>게스트에게 합리적인 가격을 제안하세요.</a>
				</p>
				<p class="line2">
					<input type="text" name="price" id="rPrice" value="${room.price}"
						onkeyup="cmaComma(this);" onchange="cmaComma(this);" />(원단위)
				</p>

				<p>
					침실 갯수 <a></br>게스트가 사용할 수 있는 침실은 몇 개인가요?</a>
				</p>
				<p class="line">
					<input type="number" name="bedRooms" value="${room.bedRooms}" min="0" />
				</p>

				<p>
					침대 갯수 <a></br>게스트가 사용할 수 있는 침대는 몇 개인가요?</a>
				</p>
				<p class="line">
					<input type="number" name="beds" value="${room.beds}" min="0" />
				</p>

				<p>
					욕실 갯수 <a></br>게스트가 사용할 수 있는 욕실은 몇 개인가요?</a>
				</p>
				<p class="line">
					<input type="number" name="baths" value="${room.baths}" min="0" />
				</p>

				<p>
					체크인 시간 <a></br>24시 형태로 입력해주세요.</a>
				</p>
				<p class="line2">
					<input type="text" name="checkIn" value="${room.checkIn}" onkeydown="numberonly(event);" maxlength="2" />
					&nbsp;&nbsp;&nbsp;ex)오후4시 => 16
				</p>

				<p>
					체크아웃 시간 <a></br>24시 형태로 입력해주세요.</a>
				</p>
				<p class="line2">
					<input type="text" name="checkOut" value="${room.checkOut}" onkeydown="numberonly(event);" maxlength="2" /> 
					&nbsp;&nbsp;&nbsp;ex)오전9시 => 09
				</p>

				<p>
					수용가능 인원 <a> </br>숙소엔 얼마나 많은 인원이 숙박할 수 있나요? </br>모든 게스트가 편안하게 숙박할 수 있는지
						확인하세요.
					</a>
				</p>
				<p class="line">
					<input type="number" name="guests" value="${room.guests}" min="0" max="100" />
				</p>

				<p>
					숙소 설명 <a></br>숙소의 장점, 특별한 편의시설과 </br>주변지역의 매력을 소개 시켜주세요. </a>
				</p>
				<p class="line">
					<textarea name="description" id="description" cols="60" rows="10"
						maxlength="2000" placeholder="2000자 이내로 입력해주세요.">${room.description}</textarea>
				</p>
				<input type="hidden" name="id" id="roomId" value="${room.id}">
				<div class="button">
					<input type="button" value="등록" onclick="first_check_ok()" />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="button" value="삭제" onclick="confirmDelete()"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button"
						value="돌아가기"
						onclick="javascript:window.location='/'" />
				</div>
			</div>
		</div>
	</form>
	<jsp:include page="../partial/footer.jsp" />
	<script src="/resources/js/hostCreate.js"></script>
</body>

</html>
