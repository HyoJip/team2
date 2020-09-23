function check_ok(event){
	event.preventDefault();
	if(document.form.username.value == ""){
		alert("이름을 입력해주세요");
		form.username.focus();
		return;
	}
	if(document.form.email.value == ""){
		alert("이메일을 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.password.value==""){
		alert("비밀번호를 입력해주세요");
		form.password.focus();
		return;
	}
	if(document.form.password.value.lenght<8){
		alert("비밀번호는 8자 이상 입력해주세요");
		form.password.focus();
		return;
	}
	if(document.form.password.value != document.form.passcheck.value){
		alert("비밀번호가 일치하지 않습니다.");
		form.passcheck.focus();
		return;
	}
	if(document.form.birthday.value == ""){
		alert("생년월일을 입력해주세요");
		form.birthday.focus();
		return;
	}
	document.form.submit();
}

function update_check_ok(event){
	event.preventDefault();
	if(document.form.password.value==""){
		alert("비밀번호를 입력해주세요.");
		form.password.focus();
		return;
	}
	if(document.form.password.value.length<8){
		alert("비밀번호는 8자리 이상 입력해주세요");
		form.password.focus();
		return;
	}
	if(document.form.password.value != document.form.passcheck.value){
		alert("비밀번호가 일치하지 않습니다.");
		form.passcheck.focus();
		return;
	}
	
	document.form.submit();
}