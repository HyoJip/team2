﻿-- 생성자 Oracle SQL Developer Data Modeler 19.2.0.182.1216
--   위치:        2020-09-09 12:34:31 KST
--   사이트:      Oracle Database 11g
--   유형:      Oracle Database 11g

CREATE SEQUENCE conversations_conversation_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE conversations_message_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE reservations_bookedday_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE reservations_reservation_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE reviews_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE romms_room_houserules_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_amenity_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_facility_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_houserule_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_photo_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_room_amentities_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_room_facilities_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE rooms_room_seq START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE sequence4 START WITH 1 INCREMENT BY 1;

CREATE SEQUENCE users_user_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE conversations_conversation (
    id        INTEGER NOT NULL,
    created   DATE,
    updated   DATE
)
LOGGING;

COMMENT ON COLUMN conversations_conversation.created IS
    '대화 생성 일자';

COMMENT ON COLUMN conversations_conversation.updated IS
    '대화 수정 일자';

ALTER TABLE conversations_conversation ADD CONSTRAINT conversations_conversation_pk PRIMARY KEY ( id );

CREATE TABLE conversations_cv_participant (
    id                INTEGER NOT NULL,
    user_id           INTEGER NOT NULL,
    conversation_id   INTEGER NOT NULL
)
LOGGING;

ALTER TABLE conversations_cv_participant ADD CONSTRAINT conversations_conversation__pk PRIMARY KEY ( id );

CREATE TABLE conversations_message (
    id                INTEGER NOT NULL,
    created           VARCHAR2(20),
    message           VARCHAR2(20),
    conversation_id   INTEGER,
    user_id           INTEGER
)
LOGGING;

COMMENT ON COLUMN conversations_message.created IS
    '대화 생성 일자';

COMMENT ON COLUMN conversations_message.message IS
    '대화 메시지 내용';

ALTER TABLE conversations_message ADD CONSTRAINT conversations_message_pk PRIMARY KEY ( id );

CREATE TABLE reservations_bookedday (
    id               INTEGER NOT NULL,
    reservation_id   INTEGER,
    created          DATE,
    updated          DATE,
    day              DATE
)
LOGGING;

COMMENT ON COLUMN reservations_bookedday.created IS
    '예약된 날짜 생성일';

COMMENT ON COLUMN reservations_bookedday.updated IS
    '예약된 날짜 수정일';

COMMENT ON COLUMN reservations_bookedday.day IS
    '예약된 날짜';

ALTER TABLE reservations_bookedday ADD CONSTRAINT reservations_bookedday_pk PRIMARY KEY ( id );

CREATE TABLE reservations_reservation (
    id          INTEGER NOT NULL,
    created     DATE,
    updated     DATE,
    status      VARCHAR2(12),
    check_in    DATE,
    check_out   DATE,
    guest_id    INTEGER,
    room_id     INTEGER,
    guests      INTEGER
)
LOGGING;

COMMENT ON COLUMN reservations_reservation.created IS
    '예약 생성 일자';

COMMENT ON COLUMN reservations_reservation.updated IS
    '예약수정일자';

COMMENT ON COLUMN reservations_reservation.status IS
    '예약 상태';

COMMENT ON COLUMN reservations_reservation.check_in IS
    '체크인 날짜';

COMMENT ON COLUMN reservations_reservation.check_out IS
    '체크아웃 날짜';

ALTER TABLE reservations_reservation ADD CONSTRAINT reservations_reservation_pk PRIMARY KEY ( id );

CREATE TABLE reviews (
    id        INTEGER NOT NULL,
    user_id   INTEGER,
    room_id   INTEGER,
    created   DATE NOT NULL,
    review    VARCHAR2(300),
    value     INTEGER
)
LOGGING;

COMMENT ON COLUMN reviews.created IS
    '리뷰 생성 일자';

COMMENT ON COLUMN reviews.review IS
    '리뷰 수정 일자';

COMMENT ON COLUMN reviews.value IS
    '평점';

ALTER TABLE reviews ADD CONSTRAINT reviews_pk PRIMARY KEY ( id );

CREATE TABLE romms_room_houserules (
    id             INTEGER NOT NULL,
    room_id        INTEGER NOT NULL,
    houserule_id   INTEGER NOT NULL
)
LOGGING;

ALTER TABLE romms_room_houserules ADD CONSTRAINT romms_room_houserules_pk PRIMARY KEY ( id );

CREATE TABLE rooms_amenity (
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
    "file1"     VARCHAR2(100),
    "file2"     VARCHAR2(100),
    "file3"     VARCHAR2(100),
    "file4"     VARCHAR2(100),
    "file5"     VARCHAR2(100),
    "file6"     VARCHAR2(100)
)
LOGGING;

COMMENT ON COLUMN rooms_photo.created IS
    '사진 생성 일자';

COMMENT ON COLUMN rooms_photo.updated IS
    '사진 수정 일자';

COMMENT ON COLUMN rooms_photo.caption IS
    '사진 설명';

COMMENT ON COLUMN rooms_photo."file" IS
    '사진 URL';

ALTER TABLE rooms_photo ADD CONSTRAINT rooms_photo_pk PRIMARY KEY ( id );

CREATE TABLE rooms_room (
    id             INTEGER NOT NULL,
    host_id        INTEGER,
    name           VARCHAR2(100),
    updated        DATE,
    created        DATE,
    description    VARCHAR2(4000),
    city           VARCHAR2(50),
    price          INTEGER,
    address        VARCHAR2(140),
    beds           INTEGER,
    bedrooms       INTEGER,
    baths          INTEGER,
    check_in       CHAR(2),
    check_out      CHAR(2),
    instant_book   INTEGER DEFAULT 0,
    guests         INTEGER
)
LOGGING;

COMMENT ON COLUMN rooms_room.name IS
    '숙소 이름';

COMMENT ON COLUMN rooms_room.updated IS
    '숙소 수정 일자';

COMMENT ON COLUMN rooms_room.created IS
    '숙소 등록 일자';

COMMENT ON COLUMN rooms_room.description IS
    '숙소 설명';

COMMENT ON COLUMN rooms_room.city IS
    '숙소 도시';

COMMENT ON COLUMN rooms_room.price IS
    '숙박 가격';

COMMENT ON COLUMN rooms_room.address IS
    '숙소 주소';

COMMENT ON COLUMN rooms_room.beds IS
    '침대 수';

COMMENT ON COLUMN rooms_room.bedrooms IS
    '침실 수';

COMMENT ON COLUMN rooms_room.baths IS
    '화장실 수';

COMMENT ON COLUMN rooms_room.check_in IS
    '체크인 시간';

COMMENT ON COLUMN rooms_room.check_out IS
    '체크아웃 시간';

COMMENT ON COLUMN rooms_room.instant_book IS
    '숙박 가능여부';

COMMENT ON COLUMN rooms_room.guests IS
    '숙박 가능 인원';

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

ALTER TABLE rooms_room_facilities ADD CONSTRAINT rooms_room_facilities_pk PRIMARY KEY ( id );

CREATE TABLE users_user (
    id             INTEGER NOT NULL,
    email          VARCHAR2(40),
    password       VARCHAR2(100),
    username       VARCHAR2(20),
    birthday       DATE,
    is_host        INTEGER,
    is_superuser   INTEGER,
    photo	   VARCHAR(50)
)
LOGGING;

COMMENT ON COLUMN users_user.email IS
    '이메일';

COMMENT ON COLUMN users_user.password IS
    '비밀번호';

COMMENT ON COLUMN users_user.username IS
    '이름';

COMMENT ON COLUMN users_user.birthday IS
    '생년월일';

COMMENT ON COLUMN users_user.is_host IS
    'guest/host';

COMMENT ON COLUMN users_user.is_superuser IS
    '관리자 여부';

ALTER TABLE users_user ADD CONSTRAINT users_user_pk PRIMARY KEY ( id );

ALTER TABLE conversations_message
    ADD CONSTRAINT fk_conversations_message_conve FOREIGN KEY ( conversation_id )
        REFERENCES conversations_conversation ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE conversations_message
    ADD CONSTRAINT fk_conversations_message_user_ FOREIGN KEY ( user_id )
        REFERENCES users_user ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE reservations_bookedday
    ADD CONSTRAINT fk_reservations_bookedday_rese FOREIGN KEY ( reservation_id )
        REFERENCES reservations_reservation ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE reservations_reservation
    ADD CONSTRAINT fk_reservations_reservation_gu FOREIGN KEY ( guest_id )
        REFERENCES users_user ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE reservations_reservation
    ADD CONSTRAINT fk_reservations_reservation_ro FOREIGN KEY ( room_id )
        REFERENCES rooms_room ( id )
    NOT DEFERRABLE;

ALTER TABLE reviews
    ADD CONSTRAINT fk_reviews_room_id_rooms_room_ FOREIGN KEY ( room_id )
        REFERENCES rooms_room ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE reviews
    ADD CONSTRAINT fk_reviews_user_id_users_user_ FOREIGN KEY ( user_id )
        REFERENCES users_user ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_photo
    ADD CONSTRAINT fk_rooms_photo_rooms_id_rooms_ FOREIGN KEY ( rooms_id )
        REFERENCES rooms_room ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_room
    ADD CONSTRAINT fk_rooms_room_host_id_users_us FOREIGN KEY ( host_id )
        REFERENCES users_user ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE conversations_cv_participant
    ADD CONSTRAINT participant_conversation_fk FOREIGN KEY ( conversation_id )
        REFERENCES conversations_conversation ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE conversations_cv_participant
    ADD CONSTRAINT participant_user_fk FOREIGN KEY ( user_id )
        REFERENCES users_user ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_room_amentities
    ADD CONSTRAINT rooms_amenity_fk FOREIGN KEY ( amenity_id )
        REFERENCES rooms_amenity ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_room_facilities
    ADD CONSTRAINT rooms_facility_fk FOREIGN KEY ( facility_id )
        REFERENCES rooms_facility ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE romms_room_houserules
    ADD CONSTRAINT rooms_houserule_fk FOREIGN KEY ( houserule_id )
        REFERENCES rooms_houserule ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_room_facilities
    ADD CONSTRAINT rooms_room_fk FOREIGN KEY ( room_id )
        REFERENCES rooms_room ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE romms_room_houserules
    ADD CONSTRAINT rooms_room_fkv1 FOREIGN KEY ( room_id )
        REFERENCES rooms_room ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

ALTER TABLE rooms_room_amentities
    ADD CONSTRAINT rooms_room_fkv2 FOREIGN KEY ( room_id )
        REFERENCES rooms_room ( id ) ON DELETE CASCADE
    NOT DEFERRABLE;

CREATE OR REPLACE TRIGGER conversations_conversat_AI_TRG 
    BEFORE INSERT ON conversations_conversation REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT conversations_conversation_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER conversations_message_AI_TRG 
    BEFORE INSERT ON conversations_message REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT conversations_message_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER reservations_bookedday_AI_TRG 
    BEFORE INSERT ON reservations_bookedday REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT reservations_bookedday_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER reservations_reservatio_AI_TRG 
    BEFORE INSERT ON reservations_reservation REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT reservations_reservation_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER reviews_AI_TRG 
    BEFORE INSERT ON reviews REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT reviews_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER romms_room_houserules_AI_TRG 
    BEFORE INSERT ON romms_room_houserules REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT romms_room_houserules_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_amenity_AI_TRG 
    BEFORE INSERT ON rooms_amenity REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_amenity_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_facility_AI_TRG 
    BEFORE INSERT ON rooms_facility REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_facility_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_houserule_AI_TRG 
    BEFORE INSERT ON rooms_houserule REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_houserule_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_photo_AI_TRG 
    BEFORE INSERT ON rooms_photo REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_photo_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_room_AI_TRG 
    BEFORE INSERT ON rooms_room REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_room_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_room_amentities_AI_TRG 
    BEFORE INSERT ON rooms_room_amentities REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_room_amentities_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER rooms_room_facilities_AI_TRG 
    BEFORE INSERT ON rooms_room_facilities REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT rooms_room_facilities_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/

CREATE OR REPLACE TRIGGER users_user_AI_TRG 
    BEFORE INSERT ON users_user REFERENCING 
    NEW AS NEW 
    FOR EACH ROW 
BEGIN 
    SELECT users_user_SEQ.NEXTVAL
    INTO :NEW.id
    FROM DUAL;
END; 
/



-- Oracle SQL Developer Data Modeler 요약 보고서: 
-- 
-- CREATE TABLE                            15
-- CREATE INDEX                             0
-- ALTER TABLE                             32
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                          14
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                         15
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
