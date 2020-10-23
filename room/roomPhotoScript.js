function check_ok() {
  event.preventDefault();
   
  if (document.form.r_file.value == "") {
	   	alert("이미지를 최소 하나 넣어주세요");
	   	//form.r_file.focus();
	   	return;
  }
  document.form.submit();
}
