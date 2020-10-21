<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RoomPhoto등록</title>
</head>

<body>
    <form name="form" method="post" enctype="multipart/form-data" action="roomPhotoOk.jsp">
        <script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        <script src="roomPhotoScript.js?ver=1" charset="utf-8" ></script>
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
                <h1>Room Photo 등록하기</h1>
                <p class="headtext">
                    - 룸을 등록하세요 . -
                </p>
                <p>주소
                    <a></br>룸에 대해 소개해 주세요.</a>
                </p>
                <textarea name="r_caption" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <!-- <input type="file" name="r_file" id="images" multiple required /> -->
                <input type="file" name="r_file" id="images" /><p>
                
                <textarea name="r_caption2" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <input type="file" name="r_file2" id="images" /><p>
                
                <textarea name="r_caption3" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <input type="file" name="r_file3" id="images" /><p>
                
                <textarea name="r_caption4" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <input type="file" name="r_file4" id="images" /><p>
                
                <textarea name="r_caption5" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <input type="file" name="r_file5" id="images" /><p>
                
                <textarea name="r_caption6" id="caption" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                <input type="file" name="r_file6" id="images" /><p>
                                
                <div class="button">
                    <input type="button" value="다음" onclick="check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="돌아가기" onclick="javascript:window.location='roomPhoto.jsp'" />
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

<!--     
<script>
	document.querySelector("#images").addEventListener("change", null {
		const files = document.querySelector("#images").files;
		let file;
		for (let i = 0; i < files.length; i++) {
			file = files[i];	
			console.log(file.name);
		}	
	})
</script>
-->
</html>
    