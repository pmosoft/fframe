Ext.define('fframe.dams.table.ExtMetaTabColListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.ExtMetaTabColList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        ExtMetaTabColList : {
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
                ,url : '/dams/table/selectMetaTabColList'
                ,reader : {
                     type : 'json' 
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                }
            }
        }
       ,DelTabColList : {
        fields : [
                  'DB_NM'
                 ,'OWNER'
                 ,'TAB_NM'
                 ]
       ,proxy : {
            type : 'ajax'
           ,url : '/dams/table/deleteTabCol'
                //,api : {destroy : '/dams/table/deleteTabCol'}
           ,reader : {
                type : 'json'
               ,rootProperty : 'data'    
           }
           ,writer : {
               type : 'json'
              ,rootProperty : 'data'    
          }
       }
   }    
     }
});
