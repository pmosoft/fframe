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
,REG_DTM    VARCHAR(14)       NULL COMMENT '등록일시'
,REG_USR_ID VARCHAR(20)       NULL COMMENT '등록자'
,UPD_DTM    VARCHAR(14)       NULL COMMENT '변경일시'
,UPD_USR_ID VARCHAR(20)       NULL COMMENT '변경자'
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='약어임시정보';
;

SELECT * FROM TDACM00021
;


------------------------------
-- 인포타입
------------------------------
DROP TABLE TDACM00030;

CREATE TABLE TDACM00030 (
 INFO_TYPE_NM   VARCHAR(30)  NOT NULL COMMENT '인포타입명' 
,INFO_TYPE_HNM  VARCHAR(30)      NULL COMMENT '인포타입한글명' 
,DOMAIN_NM      VARCHAR(20)      NULL COMMENT '도메인명' 
,DOMAIN_HNM     VARCHAR(20)      NULL COMMENT '도메인한글명' 
,DATA_TYPE_NM   VARCHAR(20)      NULL COMMENT '데이터타입명' 
,LEN            INT              NULL COMMENT '길이'
,DECIMAL_CNT    INT              NULL COMMENT '소수점수'
,DATA_TYPE_DESC VARCHAR(50)      NULL COMMENT '데이터타입설명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(INFO_TYPE_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='인포타입';
;


------------------------------
-- 용어사전
------------------------------
DROP TABLE TDACM00040;

CREATE TABLE TDACM00040 (
 COL_NM         VARCHAR(20)  NOT NULL COMMENT '컬럼명' 
,COL_HNM        VARCHAR(20)      NULL COMMENT '컬럼한글명'
,COL_DESC       VARCHAR(200)     NULL COMMENT '컬럼설명'
,COL_ABBR_HNM   VARCHAR(30)      NULL COMMENT '컬럼약어한글명'
,INFO_TYPE_NM   VARCHAR(30)      NULL COMMENT '인포타입명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(COL_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='용어사전';
;

CREATE TABLE TDACM00041 (
 COL_NM         VARCHAR(20)      NULL COMMENT '컬럼명' 
,COL_HNM        VARCHAR(20)      NULL COMMENT '컬럼한글명'
,COL_DESC       VARCHAR(200)     NULL COMMENT '컬럼설명'
,COL_ABBR_HNM   VARCHAR(30)      NULL COMMENT '컬럼약어한글명'
,INFO_TYPE_NM   VARCHAR(30)      NULL COMMENT '인포타입명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(COL_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='용어사전임시1';
;

CREATE TABLE TDACM00042 (
 COL_NM         VARCHAR(20)      NULL COMMENT '컬럼명' 
,COL_HNM        VARCHAR(20)      NULL COMMENT '컬럼한글명'
,COL_DESC       VARCHAR(200)     NULL COMMENT '컬럼설명'
,COL_ABBR_HNM   VARCHAR(30)      NULL COMMENT '컬럼약어한글명'
,INFO_TYPE_NM   VARCHAR(30)      NULL COMMENT '인포타입명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(COL_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='용어사전임시2';
;

------------------------------
-- 코드그룹
------------------------------
DROP TABLE TDACM00050;

CREATE TABLE TDACM00050 (
 CD_ID_GRP_NM   VARCHAR(10)  NOT NULL COMMENT '코드아이디그룹명'
,CD_ID_GRP_HNM  VARCHAR(10)      NULL COMMENT '코드아이디그룹한글명'
,CD_ID_GRP_DESC VARCHAR(50)      NULL COMMENT '코드아이디그룹설명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(CD_ID_GRP_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='코드그룹'
;

------------------------------
-- 코드
------------------------------
DROP TABLE TDACM00060;

CREATE TABLE TDACM00060 (
 CD_ID_NM       VARCHAR(20)  NOT NULL COMMENT '코드아이디명'     -- BIZ_CD
,CD_ID_HNM      VARCHAR(20)      NULL COMMENT '코드아이디한글명' -- 업무구분코드
,CD_ID_GRP_NM   VARCHAR(20)      NULL COMMENT '코드아이디그룹명' -- AML
,CD             VARCHAR(20)      NULL COMMENT '코드'             -- 01
,CD_NM          VARCHAR(20)      NULL COMMENT '코드명'           -- DEPOSIT
,CD_HNM         VARCHAR(20)      NULL COMMENT '코드한글명'       -- 수신
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(COL_ID_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='코드'
;


------------------------------
-- 테이블정보
------------------------------
DROP TABLE TDACM00070;

CREATE TABLE TDACM00070 (
 DB_NM          VARCHAR(10)  NOT NULL COMMENT 'DB명' 
,OWNER          VARCHAR(15)      NULL COMMENT '소유자'
,TAB_NM         VARCHAR(20)      NULL COMMENT '테이블명'
,TAB_HNM        VARCHAR(20)      NULL COMMENT '테이블한글명'
,TAB_DESC       VARCHAR(200)     NULL COMMENT '테이블설명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(DB_NM,OWNER,TAB_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='테이블정보'
;


------------------------------
-- 컬럼정보
------------------------------
DROP TABLE TDACM00080;

CREATE TABLE TDACM00080 (
 DB_NM          VARCHAR(10)  NOT NULL COMMENT 'DB명' 
,OWNER          VARCHAR(15)  NOT NULL COMMENT '소유자'
,TAB_NM         VARCHAR(20)  NOT NULL COMMENT '테이블명'
,COL_NM         VARCHAR(20)  NOT NULL COMMENT '컬럼명' 
,COL_HNM        VARCHAR(20)      NULL COMMENT '컬럼한글명'
,COL_DESC       VARCHAR(200)     NULL COMMENT '컬럼설명'
,DATA_TYPE_NM   VARCHAR(20)      NULL COMMENT '데이터타입명' 
,LEN            INT              NULL COMMENT '길이'
,DECIMAL_CNT    INT              NULL COMMENT '소수점수'
,DATA_TYPE_DESC VARCHAR(50)      NULL COMMENT '데이터타입설명'
,REG_DTM        VARCHAR(14)      NULL COMMENT '등록일시'
,REG_USR_ID     VARCHAR(20)      NULL COMMENT '등록자'
,UPD_DTM        VARCHAR(14)      NULL COMMENT '변경일시'
,UPD_USR_ID     VARCHAR(20)      NULL COMMENT '변경자'
,PRIMARY KEY(DB_NM,OWNER,TAB_NM,COL_NM)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='컬럼정보'
;
