function check_join(){
	if(document.form.name.value.length == 0){
		alert("이름을 입력하세요.");
		form.name.focus();
		return;
	}
	if(document.form.email.value.length == 0){
		alert("이메일을 입력하세요.");
		form.email.focus();
		return;
	}
	if(document.form.password.value.length == 0){
		alert("비밀번호을 입력하세요.");
		form.password.focus();
		return;
	}
	if(document.form.password.value.length < 8){
		alert("비밀번호는 8자 이상 입력하세요.");
		form.name.focus();
		return;
	}
	if(document.form.password.value != document.form.passcheck.value){
		alert("비밀번호가 일치하지 않습니다.");
		form.passcheck.focus();
		return;
	}
	if(document.form.birth.value == ""){
		alert("생년월일을 입력하세요.");
		form.birth.focus();
		return;
	}
	document.form.submit();
	
	
}