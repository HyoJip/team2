
CREATE TABLE romms_room_houserules (
    id             INTEGER NOT NULL,
    room_id        INTEGER NOT NULL,
    houserule_id   INTEGER NOT NULL
)
LOGGING;

ALTER TABLE romms_room_houserules ADD CONSTRAINT romms_room_houserules_pk PRIMARY KEY ( id );

CREATE TABLE rooms_amenity (        --생활 편의 시설
    id            INTEGER NOT NULL,
    name          VARCHAR2(20) NOT NULL,
    description   VARCHAR2(100)
)
LOGGING;

ALTER TABLE rooms_amenity ADD CONSTRAINT rooms_amenity_pk PRIMARY KEY ( id );

CREATE TABLE rooms_facility (
    id            INTEGER NOT NULL,
    name          VARCHAR2(20) NOT NULL,
    description   VARCHAR2(100)
)
LOGGING;

ALTER TABLE rooms_facility ADD CONSTRAINT rooms_facility_pk PRIMARY KEY ( id );

CREATE TABLE rooms_houserule (
    id            INTEGER NOT NULL,
    name          VARCHAR2(20) NOT NULL,
    description   VARCHAR2(100)
)
LOGGING;

ALTER TABLE rooms_houserule ADD CONSTRAINT rooms_houserule_pk PRIMARY KEY ( id );

CREATE TABLE rooms_photo (
    id         INTEGER NOT NULL,
    rooms_id   INTEGER,
    created    DATE,
    updated    DATE,
    caption    VARCHAR2(80),
    "file"     VARCHAR2(100)
)
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
    updated        DATE,
    created        DATE,
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
)
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

CREATE TABLE rooms_room_amentities (
    id           INTEGER NOT NULL,
    room_id      INTEGER NOT NULL,
    amenity_id   INTEGER NOT NULL
)
LOGGING;

ALTER TABLE rooms_room_amentities ADD CONSTRAINT rooms_room_amentities_pk PRIMARY KEY ( id );

CREATE TABLE rooms_room_facilities (
    id            INTEGER NOT NULL,
    room_id       INTEGER NOT NULL,
    facility_id   INTEGER NOT NULL
)
LOGGING;