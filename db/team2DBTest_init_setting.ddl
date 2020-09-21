-- 유저 생성(관리자:1, 호스트:2, 게스트:3)
insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('goo@gle.com', '1234', 'superuser', '2020-01-01', 0, 1);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('na@ver.com', '1234', 'guest', '1994-06-27', 1, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('kaka@o.com', '1234', 'host', '1999-12-24', 0, 0);


-- 체크인, 체크아웃 데이터 타입: DATE -> CHAR(2)
alter table rooms_room  modify (check_in char(2));
alter table rooms_room modify (check_out char(2));

-- reservation 예약인원 필드 추가
alter table reservations_reservation add (guests int);

-- room 생성(호스트(id:2))
insert into rooms_room (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
values (2, 'W 스퀘어', '2020-09-20', '2020-09-20', '광안리가 보이는 멋진 뷰, 대신 많이 비쌈', '부산',
            '200000', '용호동 102동 2401호', 2, 1, 1, '15', '12', 1, 2);
            
commit;