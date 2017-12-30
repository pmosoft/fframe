Ext.define('fframe.app.etcl.TabEttModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.tabEtt'
   ,data : {
       // 콤보 변수    
        CD_ID_NM   : ''        
       ,CD         : '01'        
       ,CD_NM      : 'FFRAME'
       // DB_CONN_CD 변수    
       ,dbInfo     : ''
       ,datasource : ''
       ,dbDriver   : ''
       ,dbConn     : ''
       ,dbUser     : ''
       ,dbPassword : ''
       ,dbType     : ''
       ,dbOwner    : ''
       // 테이블검색 변수    
       ,TAB_NM     : ''        
       // 정합성 변수    
       ,colCnt     : ''        
       ,delimeterCnt : ''        
           
           
    }
   ,stores : {
        tabEtt : {
            fields : [
                      'STS_NM'
                     ,'DB_NM'
                     ,'OWNER'
                     ,'TAB_NM'
                     ,'COL_ID'
                     ,'COL_NM'
                     ,'COL_HNM'
                     ,'DATA_TYPE_DESC'
                     ,'NULLABLE'
                     ,'PK'
                     ,'DATA_TYPE_NM'
                     ,'LEN'
                     ,'DECIMAL_CNT'
                     ,'COL_DESC'
                     ,'REG_DTM'
                     ,'REG_USR_ID'
                     ,'UPD_DTM'
                     ,'UPD_USR_ID'
                     ]
           ,proxy : {
                type : 'ajax'
               ,url : ''
               ,reader : {
                    type : 'json' 
                   ,rootProperty : 'data'
                   ,totalProperty : 'total'    
                }
            }
        }
      ,tabEtt : {
          proxy : {
              type : 'ajax'
             ,url : ''
             ,reader : {
                  type : 'json' 
                 ,rootProperty : 'data'
              }
          }
       }

    }
});
