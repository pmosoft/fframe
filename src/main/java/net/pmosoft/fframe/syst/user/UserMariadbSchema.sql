DROP TABLE TSYUR0001;

CREATE TABLE TSYUR0001 (
 USER_ID      VARCHAR(20)    NOT NULL COMMENT '사용자아이디'    
,USER_EMAIL   VARCHAR(40)    NOT NULL comment '사용자이메일'    
,USER_PW      VARCHAR(20)    NOT NULL comment '사용자암호'      
,USER_NM      VARCHAR(40)    NOT NULL comment '사용자명'        
,USER_AGE     INT                NULL comment '사용자나이'      
,USE_YN       CHAR(1)        NOT NULL comment '사용여부'        
,REG_DT       DATE               NULL comment '등록일시'        
,REG_USER_ID  VARCHAR(20)        NULL comment '등록사용자아이디'
,UPD_DT       DATE               NULL comment '변경일시'        
,UPD_USER_ID  VARCHAR(20)        NULL comment '변경사용자아이디'
,PRIMARY KEY (USER_ID)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COMMENT='사용자';
;

INSERT INTO TSYUR0001 VALUES('ADMIN','ADMIN@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN',NOW(),'ADMIN');
INSERT INTO TSYUR0001 VALUES('ADMIN2','ADMIN2@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN2',NOW(),'ADMIN2');
INSERT INTO TSYUR0001 VALUES('ADMIN3','ADMIN3@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN3',NOW(),'ADMIN3');
INSERT INTO TSYUR0001 VALUES('ADMIN4','ADMIN4@PMOSOFT.NET','1','ADMIN',50,'Y',NOW(),'ADMIN4',NOW(),'ADMIN4');
