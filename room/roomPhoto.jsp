<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="roomphoto.css">
    <title>룸 등록</title>
</head>
<body>
    <form name="form" method="post" enctype="multipart/form-data" action="roomPhotoOk.jsp">
        <script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="roomPhotoScript.js?v= <%=System.currentTimeMillis() %>" charset="utf-8"></script>
        
        <header class="body_header">
            <ul>
                <li class="airbnb_icon">
                    <a href="/"><i class="fab fa-airbnb"></i>airbnb</a>
                </li>
                <li class="room_search">
                    <input class="search_input" type="text" placeholder="검색 시작하기" />
                    <i class="fas fa-search"></i>
                </li>
                <li class="header_profile">
                    <i class="fas fa-bars"></i>
                    <a class="profile_img" rel="profile_menu" href="/login"></a>
                </li>
            </ul>
        </header>
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
       					
                    	var file = f.files; // files 를 사용하면 파일의 정보를 알 수 있음
                
                        // 파일의 갯수만큼 반복
                        for(var i=0; i<file.length; i++) {
                        	
                            var reader = new FileReader(); // FileReader 객체 사용
                            reader.onload = function(rst) {
                                $('#img_box').append('<img src="' + rst.target.result + '"style="width:259px; height:197px;">'); // append 메소드를 사용해서 이미지 추가
                                // 이미지는 base64 문자열로 추가
                                // 이 방법을 응용하면 선택한 이미지를 미리보기 할 수 있음
                            }
                            reader.readAsDataURL(file[i]); // 파일을 읽는다    
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
        <footer class="body_footer">
            <div class="footer_wrap">
                <p class="company_info">
                    <span class="right">c. 2020 Airbnb, Inc. All rights reserved</span>
                    <span class="project">team2 airbnb clone project</span>
                </p>
                <p class="page_config">
                    <i class="fas fa-globe-asia"></i>
                    <span class="language">한국어(KR)</span>
                    <small>￦</small>
                    <span class="currency">KRW</span>
                    <a target="blank" href="https://github.com/HyoJip/team2"><i class="fab fa-github"></i></a>
                    <a target="blank" href="http://www.btc.ac.kr/"><i class="fas fa-school"></i></a>
                    <a target="blank" href="https://www.airbnb.co.kr/"><i class="fab fa-airbnb"></i></a>
                </p>
            </div>
        </footer>
        <!-- footer END -->
    </form>
</body>
</html>