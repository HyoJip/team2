<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="hostpage.css"/>
    <link rel="stylesheet" href="base.css" />
</head>

<body>
    <form method="post" name="form" action="hostroomOk.jsp">
        <script src="https://kit.fontawesome.com/ad755395c3.js" crossorigin="anonymous"></script>
        <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        <script src="script.js" charset="utf-8"></script>
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
                <h1>호스트 등록하기</h1>
                <p class="headtext">
                    - 다음지역을 호스팅하고 나의 월 수입을 올리세요. -
                </p>
                <p>숙소 제목
                    <a>
                        </br>숙소의 특징과 장점을 강조하는 제목으로
                        </br>게스트의 관심을 끌어보세요.
                    </a>
                </p>
                <p class="line"><input type="text" name="r_name" /></p>
                <p>숙소 지역
                    <a>
                        </br>등록할 숙소 지역을 입력하세요. ex)부산
                    </a>
                </p>
                <p class="line2"><input type="text" name="r_city" /></p>
                <p>주소
                    <a></br>게스트에게 자세한 주소를 알려주세요.</a>
                </p>
                <div class="addr">
                    <input type="text" name="r_address1" id="address" placeholder="주소" style="margin-left: 35px;"/>
                    <input type="text" name="r_address2" id="detailAddress" placeholder="상세주소" style="margin-left: 10px;" />
                    <input type="text" name="r_address3" id="extraAddress" placeholder="참고항목" style="margin-left: 35px; margin-top: 10px;"/>
                </div>
                <input type="button" onclick="execDaumPostcode()" value="주소 찾기" style="margin-top: 20px; margin-left: 250px;"/>

                <p class="line"></p>

                <p>가격
                    <a></br>게스트에게 합리적인 가격을 제안하세요.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_price" id="rPrice" onkeyup="cmaComma(this);"
                        onchange="cmaComma(this);" />(원단위)
                </p>

                <p>
                    침실 갯수
                    <a></br>게스트가 사용할 수 있는 침실은 몇 개인가요?</a>
                </p>
                <p class="line"><input type="number" name="r_bedrooms" min="0" /></p>

                <p>
                    침대 갯수
                    <a></br>게스트가 사용할 수 있는 침대는 몇 개인가요?</a>
                </p>
                <p class="line"><input type="number" name="r_beds" min="0" /></p>

                <p>욕실 갯수
                    <a></br>게스트가 사용할 수 있는 욕실은 몇 개인가요?</a>
                </p>
                <p class="line"><input type="number" name="r_baths" min="0" /></p>

                <p>체크인 시간
                    <a></br>24시 형태로 입력해주세요.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_check_in" /> &nbsp;&nbsp;&nbsp;ex)오후4시 => 16
                </p>

                <p>체크아웃 시간
                    <a></br>24시 형태로 입력해주세요.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_check_out" /> &nbsp;&nbsp;&nbsp;ex)오전9시 => 09
                </p>

                <p>수용가능 인원
                    <a>
                        </br>숙소엔 얼마나 많은 인원이 숙박할 수 있나요?
                        </br>모든 게스트가 편안하게 숙박할 수 있는지 확인하세요.
                    </a>
                </p>
                <p class="line">
                    <input type="number" name="r_guests" min="0" max="10" />
                </p>

                <p>숙소 설명
                    <a></br>숙소의 장점, 특별한 편의시설과
                        </br>주변지역의 매력을 소개 시켜주세요.
                    </a>
                </p>
                <p class="line">
                    <textarea name="r_description" id="description" cols="60" rows="10" maxlength="500" placeholder="500자 내외로 입력해주세요."></textarea>
                </p>
                <div class="button">
                    <input type="button" value="호스트 등록" onclick="first_check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="돌아가기" onclick="javascript:window.location='main.jsp'" />
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
    