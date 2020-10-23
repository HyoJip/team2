function execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("extraAddress").value = extraAddr;
      } else {
        document.getElementById("extraAddress").value = "";
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById("address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("detailAddress").focus();
    },
  }).open();
}

function first_check_ok() {
  event.preventDefault();
  if (document.form.name.value == "") {
    alert("숙소이름을 입력해주세요");
    form.r_name.focus();
    return;
  }
  if (document.form.city.value == "") {
    alert("숙소 지역을 입력해주세요");
    form.r_city.focus();
    return;
  }
  if (document.form.address1.value == "") {
    alert("주소를 입력해주세요");
    form.r_address1.focus();
    return;
  }
  if (document.form.price.value == "") {
    alert("희망 가격 을 입력해주세요");
    form.r_price.focus();
    return;
  }
  if (document.form.bedRooms.value == "") {
    alert("방 갯수를 입력해주세요");
    form.r_bedrooms.focus();
    return;
  }
  if (document.form.beds.value == "") {
    alert("침대 갯수를 입력해주세요");
    form.r_beds.focus();
    return;
  }
  if (document.form.baths.value == "") {
    alert("화장실 갯수를 입력해주세요");
    form.r_baths.focus();
    return;
  }
  if (document.form.checkIn.value == "") {
    alert("희망 체크인 시간을 입력해주세요");
    form.r_check_in.focus();
    return;
  }
  if (document.form.checkIn.value.length != 2) {
    alert("시간은 2자리로 입력해주세요 \n ex) 오전2시 = 02 , 오후3시 = 15");
    form.r_check_in.focus();
    return;
  }
  if (document.form.checkOut.value == "") {
    alert("희망 체크아웃 시간을 입력해주세요");
    form.r_check_out.focus();
    return;
  }
  if (document.form.checkOut.value.length != 2) {
    alert("시간은 2자리로 입력해주세요 \n ex) 오전2시 = 02 , 오후3시 = 15");
    form.r_check_out.focus();
    return;
  }
  if (document.form.guests.value == "") {
    alert("최대 수용 가능 인원을 입력해주세요");
    form.r_guests.focus();
    return;
  }
  if (document.form.description.value == "") {
    alert("간단한 숙소 설명을 입력해주세요");
    form.r_description.focus();
    return;
  }

  const priceInput = document.querySelector("#rPrice");
  priceInput.value = priceInput.value.replace(/,/g, "");

  document.form.submit();
}
function cmaComma(obj) {
  var firstNum = obj.value.substring(0, 1); // 첫글자 확인 변수
  var strNum = /^[\,0-9]*$/; // 숫자와 , 만 가능
  var str = "" + obj.value.replace(/,/gi, ""); // 콤마 제거  /[^0-9]/gi;
  var regx = new RegExp(/(-?\d+)(\d{3})/);
  var bExists = str.indexOf(".", 0);
  var strArr = str.split(".");
  if (!strNum.test(obj.value)) {
    //문자입력시 출력
    alert("숫자만 입력하십시오.\n\n특수문자와 한글/영문은 사용할수 없습니다.");
    obj.value = 1;
    obj.focus();
    return false;
  }
  while (regx.test(strArr[0])) {
    strArr[0] = strArr[0].replace(regx, "$1,$2");
  }
  if (bExists > -1) {
    obj.value = strArr[0] + "." + strArr[1];
  } else {
    obj.value = strArr[0];
  }
}

function commaSplit(n) {
  // 콤마 나누는 부분
  var txtNumber = "" + n;
  var rxSplit = new RegExp("([0-9])([0-9][0-9][0-9][,.])");
  var arrNumber = txtNumber.split(".");
  arrNumber[0] += ".";
  do {
    arrNumber[0] = arrNumber[0].replace(rxSplit, "$1,$2");
  } while (rxSplit.test(arrNumber[0]));
  if (arrNumber.length > 1) {
    return arrNumber.join("");
  } else {
    return arrNumber[0].split(".")[0];
  }
}
	
function numberonly(e) {
	var key, obj = e.srcElement || e.target;
	key = e.keyCode;
	if(key == 8) return;
	if(key == 9) return;
	if( (key < 45 || key > 57) && key < 96 || key > 105 && key != 109 && key != 189 ) {
		obj.blur();
		setTimeout(function() {
			obj.focus();
		}, 30);
	}
}


