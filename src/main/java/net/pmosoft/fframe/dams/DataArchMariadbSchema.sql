/*
 * 테이블 작성 및 생성은 스크립트로 하고
 * 
 * 엑셀이나 디비접속으로 systable 정보를 읽어서 약어, 인포타입, 표준용어 추출 및
 * 
 * 테이블 스키마 품질 지적 및 가이드
 * 
 * 
 * 표준용어 혹은 약어 정보 검색 기능. public or private.
 * 
 * 표준용어 분석
 * 
 * 웹버젼과 어플버젼
 * 
 * QA용
 * 
 * 
 * 프로젝트 거버넌스 툴
 * 
 * 
 * 정합성 체크
 * */


﻿------------------------------
-- 패키지 정보
------------------------------

select @@lower_case_table_names
;

drop table TDACM00010
;

CREATE TABLE TDACM00010 (
 PKG_FUL_NM VARCHAR(20)      NULL COMMENT '패키지풀명'
,PKG2_NM    CHAR(2)          NULL COMMENT '패키지2자리명'
,PKG3_NM    CHAR(3)          NULL COMMENT '패키지3자리명'
,PKG4_NM    CHAR(4)          NULL COMMENT '패키지4자리명'
,PKG_HNM    VARCHAR(10)      NULL COMMENT '패키지한글명'
,PKG_DESC   VARCHAR(200)     NULL COMMENT '패키지설명'
,USE_YN     CHAR(1)          NULL COMMENT '사용유무'
,REG_DTM    VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM    VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(PKG_FUL_NM)
) ENGINE=INNODB DEFAULT CHARSET=utf8 COMMENT='패키지정보';
;

INSERT INTO TDACM00010 VALUES('system','sy','sys','syst','시스템','시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');
INSERT INTO TDACM00010 VALUES('data architecter','da','das','dams','데이터 아키텍쳐','테이블스키마관리 시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');
INSERT INTO TDACM00010 VALUES('user','ur','usr','user','유저','유저 관리 시스템','Y',date_format(now(),'%Y%m%d%H%i'),'admin',date_format(now(),'%Y%m%d%H%i'),'admin');

SELECT * FROM TDACM00010
;
 
﻿------------------------------
-- 약어 정보
------------------------------
DROP TABLE TDACM00020;

CREATE TABLE TDACM00020 (
 ABBR_NM     VARCHAR(10) NOT NULL COMMENT '약어명'
,ABBR_FUL_NM VARCHAR(20)     NULL COMMENT '약어풀명'
,ABBR_HNM    VARCHAR(10)     NULL COMMENT '약어한글명'
,ABBR_DESC   VARCHAR(200)    NULL COMMENT '약어설명'
,ABBR_APR_CD CHAR(2)         NULL COMMENT '약어승인코드' -- 01:요청 02:진행중 03:반려 04:반려취소 05:승인 06:승인취소 
,REG_DTM     VARCHAR(14)     NULL COMMENT '등록일시'
,REG_USR_ID  VARCHAR(20)     NULL COMMENT '등록자'
,UPD_DTM     VARCHAR(14)     NULL COMMENT '변경일시'
,UPD_USR_ID  VARCHAR(20)     NULL COMMENT '변경자'
,PRIMARY KEY(ABBR_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='약어정보';
;

SELECT * FROM TDACM00020
;

DROP TABLE TDACM00021;

CREATE TABLE TDACM00021 (
 ABBR_NM     VARCHAR(10)  NOT NULL COMMENT '약어명'
,ABBR_FUL_NM VARCHAR(20)      NULL COMMENT '약어풀명'
,ABBR_HNM    VARCHAR(10)      NULL COMMENT '약어한글명'
,ABBR_DESC   VARCHAR(200)     NULL COMMENT '약어설명'
,REG_DTM    VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM    VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID VARCHAR(20)      NULL COMMENT '변경자'
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='약어임시정보';
;

SELECT * FROM TDACM00021
;
 