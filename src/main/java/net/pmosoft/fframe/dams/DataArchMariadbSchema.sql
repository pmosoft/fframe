﻿------------------------------
-- 패키지 설명
------------------------------
DROP TABLE TDACM0001;

CREATE TABLE TDACM0001 (
 UID        INT          NOT NULL COMMENT '유니크아이디'
,PKG2_NM    CHAR(2)          NULL COMMENT '패키지2자리명'
,PKG3_NM    CHAR(3)          NULL COMMENT '패키지3자리명'
,PKG4_NM    CHAR(4)          NULL COMMENT '패키지4자리명'
,PKG_FUL_NM VARCHAR(20)      NULL COMMENT '패키지풀명'
,PKG_HNM    VARCHAR(10)      NULL COMMENT '패키지한글명'
,PKG_DESC   VARCHAR(200)     NULL COMMENT '패키지설명'
,USE_YN     CHAR(1)      NOT NULL COMMENT '사용유무'
,REG_DTM    VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM    VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(UID)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='패키지정보';
;

INSERT INTO TDACM0001 VALUES(1,'sy','sys','syst','system','시스템','시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');
INSERT INTO TDACM0001 VALUES(2,'da','das','dams','data architecter','데이터 아키텍쳐','테이블스키마관리 시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');
INSERT INTO TDACM0001 VALUES(3,'ur','usr','user','user','유저','유저 관리 시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');

SELECT * FROM TDACM0001
;

 


