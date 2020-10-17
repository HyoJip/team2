
CREATE TABLE romms_room_houserules (
    id             INTEGER NOT NULL,
    room_id        INTEGER NOT NULL,
    houserule_id   INTEGER NOT NULL
)
LOGGING;

CREATE TABLE rooms_photo (
    id         INTEGER NOT NULL,
    rooms_id   INTEGER,
    created    DATE,
    updated    DATE,
    caption    VARCHAR2(80),
    "file"     VARCHAR2(100)
);


alter table rooms_photo add ("file2" VARCHAR2(100));
alter table rooms_photo add ("file3" VARCHAR2(100));
alter table rooms_photo add ("file4" VARCHAR2(100));
alter table rooms_photo add ("file5" VARCHAR2(100));
alter table rooms_photo add ("file6" VARCHAR2(100));


alter table rooms_photo drop ("file2");
alter table rooms_photo drop ("file3");
alter table rooms_photo drop ("file4");
alter table rooms_photo drop ("file5");
alter table rooms_photo drop ("file6");

drop table rooms_photo;

select room.id
from users_user member, rooms_room room
where member.id = 10 
and room.host_id = member.id;

insert into rooms_photo(rooms_id, created, updated, caption, "file") values(37, '2020-10-10','2020-10-10','s','s');

LOGGING;

COMMENT ON COLUMN rooms_photo.created IS
    '�깮�꽦�씪�옄';

COMMENT ON COLUMN rooms_photo.updated IS
    '�닔�젙�씪�옄';

COMMENT ON COLUMN rooms_photo.caption IS
    '�궗吏� �꽕紐�';

COMMENT ON COLUMN rooms_photo."file" IS
    '�뙆�씪�쐞移�';

ALTER TABLE rooms_photo ADD CONSTRAINT rooms_photo_pk PRIMARY KEY ( id );

CREATE TABLE rooms_room (
    id             INTEGER NOT NULL,       
    host_id        INTEGER,
    name           VARCHAR2(40),
    updated        DATE,    --LOCALDATE
    created        DATE,    --LOCALDATE
    description    VARCHAR2(500),
    city           VARCHAR2(50),
    price          INTEGER,
    address        VARCHAR2(140),
    beds           INTEGER,
    bedrooms       INTEGER,
    baths          INTEGER,
    check_in       TIMESTAMP,
    check_out      TIMESTAMP,
    instant_book   INTEGER,
    guests         INTEGER
);

SELECT * FROM users_user order by id;
SELECT * FROM rooms_room order by id;
SELECT * FROM rooms_photo order by id;

rollback;

delete from rooms_room;

desc rooms_room;  
commit;

delete from rooms_room where id=62;
delete from rooms_room where id=43;
delete from rooms_photo;

desc users_user;  
desc rooms_room;  
commit;

drop table rooms_room;
drop table users_user;

delete from rooms_room;

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests) 


VALUES(2,'민성','2020-09-01', '2020-09-01', '숙소','서울',50000,'부산시 연제구',3,1,2,'5','3',2,2);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
VALUES(43,'주성','2020-09-05','2020-09-05','호텔','부산',200000,'부산시 해운대구',7,8,4,'3','6',2,3);


INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)


VALUES(1,'오성','2020-09-03','2020-09-03','집','부산',50000,'부산시 수영구',5,2,3,'8','3',3,5);

values (45, '울트라', '2020-09-13', '2020-09-13', 'Wow', 
        '울산', 100000, '울산시', 4, 5, 6, '3', '9', 1, 2);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)

VALUES(43,'주성','2020-09-05','2020-09-05','호텔','부산',200000,'부산시 해운대구',7,8,4,'3','6',2,3);

VALUES(44,'YS','2020-09-10','2020-09-10','HOTEL','BUSAN',200000,'Hae-un-dae',7,8,4,'3','6',2,3);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)

VALUES(44,'YS','2020-09-10','2020-09-10','HOTEL','BUSAN',200000,'Hae-un-dae',7,8,4,'3','6',2,3);

VALUES(46,'JP','2020-09-30','2020-09-30','POWER','INCHEON',500000,'China-Town',3,4,5,'3','3',1,5);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
VALUES(47,'JP','2020-09-30','2020-09-30','POWER','INCHEON',500000,'China-Town',3,4,5,'3','3',1,5);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
VALUES(48,'주성','2020-09-05','2020-09-05','호텔','부산',200000,'부산시 해운대구',7,8,4,'3','6',2,3);

INSERT INTO ROOMS_ROOM (host_id, name, updated, created, description,
                                city, price, address, beds, bedrooms, baths, check_in, check_out,
                                instant_book, guests)
VALUES(49,'YS','2020-09-10','2020-09-10','HOTEL','BUSAN',200000,'Hae-un-dae',7,8,4,'3','6',2,3);

commit;

LOGGING;

COMMENT ON COLUMN rooms_room.name IS
    '�닕�냼 �씠由�';

COMMENT ON COLUMN rooms_room.updated IS
    '�닕�냼 �닔�젙�씪�옄';

COMMENT ON COLUMN rooms_room.created IS
    '�닕�냼 �깮�꽦�씪�옄';

COMMENT ON COLUMN rooms_room.description IS
    '�닕�냼 �꽕紐�';

COMMENT ON COLUMN rooms_room.city IS
    '�룄�떆';

COMMENT ON COLUMN rooms_room.price IS
    '媛�寃�';

COMMENT ON COLUMN rooms_room.address IS
    '二쇱냼';

COMMENT ON COLUMN rooms_room.beds IS
    '移⑤� 媛쒖닔';

COMMENT ON COLUMN rooms_room.bedrooms IS
    '移⑥떎 媛쒖닔';

COMMENT ON COLUMN rooms_room.baths IS
    '�솕�옣�떎 媛쒖닔';

COMMENT ON COLUMN rooms_room.check_in IS
    '泥댄겕�씤 �떆媛�';

COMMENT ON COLUMN rooms_room.check_out IS
    '泥댄겕�븘�썐 �떆媛�';

COMMENT ON COLUMN rooms_room.instant_book IS
    '�삁�빟媛��뒫�뿬遺�';

COMMENT ON COLUMN rooms_room.guests IS
    '�닔�슜�씤�썝';

ALTER TABLE rooms_room ADD CONSTRAINT rooms_room_pk PRIMARY KEY ( id );

LOGGING;



