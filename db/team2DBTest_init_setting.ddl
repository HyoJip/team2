-- 체크인, 체크아웃 HH24 형태로 고정: DATE -> CHAR(2)
alter table rooms_room  modify (check_in char(2));
alter table rooms_room modify (check_out char(2));

-- db password 암호화를 위해 varchar(20) -> 100
alter table users_user modify (password varchar(100));

-- reservation 에 숙박인원 추가
alter table reservations_reservation add (guests int);

-- room 추가(호스트(id:1, 2))

insert into rooms_room (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
values (1, '민성', '2020-09-03', '2020-09-05', 'GREAT', 
        '부산', 50000, '부산시 해운대구', 2, 1, 1, '15', '12', 1, 2);
            
insert into rooms_room (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
values (2, 'W스퀘어', '2020-09-20', '2020-09-20', '숙소 설명, 부산에서 비싼 아파트, 뷰가 좋음, 광안대교가 한눈에 보이는', '부산광역시',
            '200000', ' 용호동 102동 2401호', 2, 1, 1, '15', '12', 1, 2);
            
commit;
