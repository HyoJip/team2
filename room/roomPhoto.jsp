<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="roomphoto.css">
    <title>에어비앤비 | 숙소 사진 등록</title>
</head>
<body>
    <form name="form" method="post" enctype="multipart/form-data" action="roomPhotoOk.jsp">
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="roomPhotoScript.js?v= <%=System.currentTimeMillis() %>" charset="utf-8"></script>
        <div class="background">
            <div class="host">
                <h1>숙소 사진 등록하기</h1>
                <p class="headtext">
                    - 사진을 등록하세요  -
                </p>
                <p class="subtext">
                    *사진은 최대 6장 등록 가능합니다.
                </p>
                <div class="img" style="text-align:center;">
                    <input type="file" name="r_file" style="width:400px; padding-bottom: 20px;" accept="image/*" multiple onchange="fileInfo(this)" /><br>
                    <div id="img_box"></div> 
                </div>
                
                <script>
                    function fileInfo(f) {
       					
                    	var file = f.files; 
                
                        for(var i=0; i<file.length; i++) {
                        	
                            var reader = new FileReader(); 
                            reader.onload = function(rst) {
                                $('#img_box').append('<img src="' + rst.target.result + '"style="width:259px; height:197px;">');
                            }
                            reader.readAsDataURL(file[i]);
                        }         
                    }
 
                </script>
                
                <div class="button">
                    <input type="button" value="다음" onclick="check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="다시 작성" onclick="javascript:window.location='roomPhoto.jsp'"/>
                </div>  
            </div>
        </div>

        <!-- footer END -->
    </form>
</body>
</html>