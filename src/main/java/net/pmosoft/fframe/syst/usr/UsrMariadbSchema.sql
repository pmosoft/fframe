DROP TABLE TSYUR00010
;

CREATE TABLE TSYUR00010 (
 USR_ID      VARCHAR(40)    NOT NULL COMMENT '사용자아이디'    
,USR_EMAIL   VARCHAR(40)    NOT NULL comment '사용자이메일'    
,USR_PW      VARCHAR(20)    NOT NULL comment '사용자암호'      
,USR_NM      VARCHAR(40)    NOT NULL comment '사용자명'        
,USR_AGE     INT                NULL comment '사용자나이'      
,USE_YN       CHAR(1)       NOT NULL comment '사용여부'        
,REG_DT       DATE              NULL comment '등록일시'        
,REG_USR_ID  VARCHAR(20)        NULL comment '등록사용자아이디'
,UPD_DT       DATE              NULL comment '변경일시'        
,UPD_USR_ID  VARCHAR(20)        NULL comment '변경사용자아이디'
,PRIMARY KEY (USR_ID)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='사용자';
;

INSERT INTO TSYUR00010 VALUES('ADMIN','ADMIN@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN',NOW(),'ADMIN');
INSERT INTO TSYUR00010 VALUES('ADMIN2','ADMIN2@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN2',NOW(),'ADMIN2');
INSERT INTO TSYUR00010 VALUES('ADMIN3','ADMIN3@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN3',NOW(),'ADMIN3');
INSERT INTO TSYUR00010 VALUES('ADMIN4','ADMIN4@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN4',NOW(),'ADMIN4');


SELECT * FROM TSYUR00010
;

drop table TSYUR00020
;


CREATE TABLE TSYUR00020 (
 USR_ID      VARCHAR(40)    NOT NULL COMMENT '사용자아이디'    
,USR_EMAIL   VARCHAR(40)    NOT NULL comment '사용자이메일'    
,USR_AGE     INT                NULL comment '사용자나이'      
,REG_DT       DATE              NULL comment '등록일시'        
,REG_USR_ID  VARCHAR(20)        NULL comment '등록사용자아이디'
,UPD_DT       DATE              NULL comment '변경일시'        
,UPD_USR_ID  VARCHAR(20)        NULL comment '변경사용자아이디'
,PRIMARY KEY (USR_ID)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='사용자부가정보';
;

DROP TABLE TSYUR00030;

CREATE TABLE TSYUR00030 (
 USR_ID      VARCHAR(40)    NOT NULL COMMENT '사용자아이디'    
,USR_PRJ_ID  VARCHAR(40)    NOT NULL comment '사용자프로젝트아이디'    
,REG_DT       DATE              NULL comment '등록일시'        
,REG_USR_ID  VARCHAR(20)        NULL comment '등록사용자아이디'
,UPD_DT       DATE              NULL comment '변경일시'        
,UPD_USR_ID  VARCHAR(20)        NULL comment '변경사용자아이디'
,PRIMARY KEY (USR_ID)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='사용자프로젝트';
;

