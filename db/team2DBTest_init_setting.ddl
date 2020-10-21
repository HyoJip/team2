﻿insert into users_user (email, password, username, birthday, is_host, is_superuser)

insert into users_user (email, password, username, birthday, is_host, is_superuser)
>>>>>>> 43b94a1f421c65cf0bc913afa3f448230f27a9a5
values ('goo@gle.com', '1234', 'superuser', '2020-01-01', 0, 1);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('na@ver.com', '1234', 'guest', '1994-06-27', 1, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('kaka@o.com', '1234', 'host', '1999-12-24', 0, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('ya@hoo.com', '1234', 'guest', '2015-4-15', 0, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('da@um.com', '1234', 'host', '1996-05-05', 0, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('ly@cos.com', '1234', 'guest', '1970-08-15', 0, 0);

﻿-- 체크인, 체크아웃 HH24 형태로 고정: DATE -> CHAR(2)
alter table rooms_room  modify (check_in char(2));
alter table rooms_room modify (check_out char(2));

-- db password 암호화를 위해 varchar(20) -> 100
alter table users_user modify (password varchar(100));

-- reservation 에 숙박인원 추가
alter table reservations_reservation add (guests int);

-- rooms_room 열 속성 변경
alter table rooms_room modify (instant_book default 1);
alter table rooms_room modify (description varchar(2000));

-- users_user 프로필사진 추가
alter table users_user add (photo varchar2(50));


-- room 추가(호스트(id:1, 2))
insert into rooms_room (host_id, name, updated, created, description, city, price, address, beds, bedrooms, baths, check_in, check_out, instant_book, guests)
values (2, 'W스퀘어', '2020-09-20', '2020-09-20', '숙소 설명, 부산에서 비싼 아파트, 뷰가 좋음, 광안대교가 한눈에 보이는', '부산광역시', '200000', ' 용호동 102동 2401호', 2, 1, 1, '15', '12', 1, 2);
 
commit;
