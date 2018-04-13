/**********************************/
/* Table Name: ttmcm00030 */
/**********************************/
CREATE TABLE TTMCM00030(
		TEAM_ID                       		CHAR(15)		 NOT NULL COMMENT 'TEAM_ID',
		PRJ_ID                        		VARCHAR(20)		 NOT NULL COMMENT 'PRJ_ID',
		PRJ_NM                        		VARCHAR(100)		 NULL  COMMENT 'PRJ_NM',
		PRJ_DESC                      		VARCHAR(2000)		 NULL  COMMENT 'PRJ_DESC',
		PRJ_SKILL_DESC                		VARCHAR(2000)		 NULL  COMMENT 'PRJ_SKILL_DESC',
		PRJ_START_DT                  		CHAR(8)		 NULL  COMMENT 'PRJ_START_DT',
		REG_DTM                       		VARCHAR(14)		 NULL  COMMENT 'REG_DTM',
		REG_USR_ID                    		VARCHAR(20)		 NULL  COMMENT 'REG_USR_ID',
		UPD_DTM                       		DATE		 NULL  COMMENT 'UPD_DTM',
		UPD_USR_ID                    		VARCHAR(14)		 NULL  COMMENT 'UPD_USR_ID'
) COMMENT='ttmcm00030';

/**********************************/
/* Table Name: ttmcm00040 */
/**********************************/
CREATE TABLE TTMCM00040(
		PRJ_ID                        		VARCHAR(20)		 NOT NULL COMMENT 'PRJ_ID',
		USR_ID                        		VARCHAR(20)		 NOT NULL COMMENT 'USR_ID',
		EVAL_REG_DTM                  		VARCHAR(14)		 NOT NULL COMMENT 'EVAL_REG_DTM',
		SELF_EVAL_CD                  		CHAR(2)		 NULL  COMMENT 'SELF_EVAL_CD',
		EVAL_START_DT                 		CHAR(8)		 NULL  COMMENT 'EVAL_START_DT',
		EVAL_END_DT                   		CHAR(8)		 NULL  COMMENT 'EVAL_END_DT',
		TOT_EVAL_TM_NUM               		INT(10)		 NULL  COMMENT 'TOT_EVAL_TM_NUM',
		EVAL_DESC                     		VARCHAR(2000)		 NULL  COMMENT 'EVAL_DESC',
		EVAL_EVID_CD                  		CHAR(2)		 NULL  COMMENT 'EVAL_EVID_CD',
		EVAL_EVID_DESC                		VARCHAR(2000)		 NULL  COMMENT 'EVAL_EVID_DESC',
		REG_DTM                       		VARCHAR(14)		 NOT NULL COMMENT 'REG_DTM',
		REG_USR_ID                    		VARCHAR(20)		 NULL  COMMENT 'REG_USR_ID',
		UPD_DTM                       		DATE		 NULL  COMMENT 'UPD_DTM',
		UPD_USR_ID                    		VARCHAR(14)		 NULL  COMMENT 'UPD_USR_ID'
) COMMENT='ttmcm00040';


ALTER TABLE TTMCM00030 ADD CONSTRAINT IDX_TTMCM00030_PK PRIMARY KEY (TEAM_ID, PRJ_ID);

ALTER TABLE TTMCM00040 ADD CONSTRAINT IDX_TTMCM00040_PK PRIMARY KEY (PRJ_ID, USR_ID, REG_DTM);

