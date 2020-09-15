function check_ok(){
	if(document.form.email.value.lenght==0){
		alert("아이디를 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.email.value != "@"){
		alert("이메일 형식에 맞게 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.password.value.lenght==0){
		alert("비밀번호를 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.password.value.lenght<=8){
		alert("비밀번호는 8자 이상 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.email.value != document.form.passcheck.value){
		alert("비밀번호가 일치하지 않습니다.");
		form.email.focus();
		return;
	}
	if(document.form.name.value.lenght==0){
		alert("이름을 입력해주세요");
		form.email.focus();
		return;
	}
	if(document.form.email.value==null){
		alert("생년월일을 입력해주세요");
		form.email.focus();
		return;
	}
	document.form.submit();
}