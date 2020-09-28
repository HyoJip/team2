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
                    <input class="search_input" type="text" placeholder="�˻� �����ϱ�" />
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
                <h1>ȣ��Ʈ ����ϱ�</h1>
                <p class="headtext">
                    - ���������� ȣ�����ϰ� ���� �� ������ �ø�����. -
                </p>
                <p>���� ����
                    <a>
                        </br>������ Ư¡�� ������ �����ϴ� ��������
                        </br>�Խ�Ʈ�� ������ �������.
                    </a>
                </p>
                <p class="line"><input type="text" name="r_name" /></p>
                <p>���� ����
                    <a>
                        </br>����� ���� ������ �Է��ϼ���. ex)�λ�
                    </a>
                </p>
                <p class="line2"><input type="text" name="r_city" /></p>
                <p>�ּ�
                    <a></br>�Խ�Ʈ���� �ڼ��� �ּҸ� �˷��ּ���.</a>
                </p>
                <div class="addr">
                    <input type="text" name="r_address1" id="address" placeholder="�ּ�" style="margin-left: 35px;"/>
                    <input type="text" name="r_address2" id="detailAddress" placeholder="���ּ�" style="margin-left: 10px;" />
                    <input type="text" name="r_address3" id="extraAddress" placeholder="�����׸�" style="margin-left: 35px; margin-top: 10px;"/>
                </div>
                <input type="button" onclick="execDaumPostcode()" value="�ּ� ã��" style="margin-top: 20px; margin-left: 250px;"/>

                <p class="line"></p>

                <p>����
                    <a></br>�Խ�Ʈ���� �ո����� ������ �����ϼ���.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_price" id="rPrice" onkeyup="cmaComma(this);"
                        onchange="cmaComma(this);" />(������)
                </p>

                <p>
                    ħ�� ����
                    <a></br>�Խ�Ʈ�� ����� �� �ִ� ħ���� �� ���ΰ���?</a>
                </p>
                <p class="line"><input type="number" name="r_bedrooms" min="0" /></p>

                <p>
                    ħ�� ����
                    <a></br>�Խ�Ʈ�� ����� �� �ִ� ħ��� �� ���ΰ���?</a>
                </p>
                <p class="line"><input type="number" name="r_beds" min="0" /></p>

                <p>��� ����
                    <a></br>�Խ�Ʈ�� ����� �� �ִ� ����� �� ���ΰ���?</a>
                </p>
                <p class="line"><input type="number" name="r_baths" min="0" /></p>

                <p>üũ�� �ð�
                    <a></br>24�� ���·� �Է����ּ���.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_check_in" /> &nbsp;&nbsp;&nbsp;ex)����4�� => 16
                </p>

                <p>üũ�ƿ� �ð�
                    <a></br>24�� ���·� �Է����ּ���.</a>
                </p>
                <p class="line2">
                    <input type="text" name="r_check_out" /> &nbsp;&nbsp;&nbsp;ex)����9�� => 09
                </p>

                <p>���밡�� �ο�
                    <a>
                        </br>���ҿ� �󸶳� ���� �ο��� ������ �� �ֳ���?
                        </br>��� �Խ�Ʈ�� ����ϰ� ������ �� �ִ��� Ȯ���ϼ���.
                    </a>
                </p>
                <p class="line">
                    <input type="number" name="r_guests" min="0" max="10" />
                </p>

                <p>���� ����
                    <a></br>������ ����, Ư���� ���ǽü���
                        </br>�ֺ������� �ŷ��� �Ұ� �����ּ���.
                    </a>
                </p>
                <p class="line">
                    <textarea name="r_description" id="description" cols="60" rows="10" maxlength="500" placeholder="500�� ���ܷ� �Է����ּ���."></textarea>
                </p>
                <div class="button">
                    <input type="button" value="ȣ��Ʈ ���" onclick="first_check_ok()" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="button" value="���ư���" onclick="javascript:window.location='main.jsp'" />
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
                    <span class="language">�ѱ���(KR)</span>
                    <small>��</small>
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
    