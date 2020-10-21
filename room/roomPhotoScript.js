function check_ok() {
  event.preventDefault();
  
  if (document.form.r_caption.value == "") {
	  	alert("숙소 설명을 입력해주세요");
	  	form.r_caption.focus();
	  	return;
  }
  
  if (document.form.r_file.value == "") {
	   	alert("이미지를 넣어주세요");
	   	form.r_file.focus();
	   	return;
  }
    
  document.form.submit();
}
