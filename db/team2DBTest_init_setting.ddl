-- ���� ����(������:1, ȣ��Ʈ:2, �Խ�Ʈ:3)
insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('goo@gle.com', '1234', 'superuser', '2020-01-01', 0, 1);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('na@ver.com', '1234', 'guest', '1994-06-27', 1, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('kaka@o.com', '1234', 'host', '1999-12-24', 0, 0);

insert into users_user (email, password, username, birthday, is_host, is_superuser)
values ('da@um.com', '1234', 'host', '1996-05-05', 0, 0);

-- üũ��, üũ�ƿ� ������ Ÿ��: DATE -> CHAR(2)
alter table rooms_room  modify (check_in char(2));
alter table rooms_room modify (check_out char(2));

-- reservation �����ο� �ʵ� �߰�
alter table reservations_reservation add (guests int);

-- room ����(ȣ��Ʈ(id:2))
insert into rooms_room (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
values (1, '민성', '2020-09-03', '2020-09-05', 'GREAT', 
        '부산', 50000, '부산시 해운대구', 2, 1, 1, '15', '12', 1, 2);
            
insert into rooms_room (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
values (2, 'W ������', '2020-09-20', '2020-09-20', '���ȸ��� ���̴� ���� ��, ��� ���� ���', '�λ�',
            200000, '��ȣ�� 102�� 2401ȣ', 2, 1, 1, '15', '12', 1, 2);

SELECT * FROM ROOMS_ROOM;
SELECT * FROM USERS_USER;

delete from rooms_room;

desc rooms_room;
            
commit;