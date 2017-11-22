Ext.define('fframe.dams.table.ExtMetaTabColListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.extMetaTabColList'
   ,data : {
        CD_ID_NM   : ''        
       ,CD         : '01'        
       ,CD_NM      : 'FFRAME'
       ,dbInfo     : ''
       ,datasource : ''
       ,dbDriver   : ''
       ,dbConn     : ''
       ,dbUser     : ''
       ,dbPassword : ''
       ,dbType     : ''
       ,dbOwner    : ''
    }
   ,stores : {
        extMetaTabColList : {
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
    }
});
