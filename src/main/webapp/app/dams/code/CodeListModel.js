Ext.define('fframe.dams.table.CodeListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.CodeList'
    ,data : {
        searchKeyCombo : 'COL_HNM'
       ,searchValue : ''
       ,termStsCd : '99'    
     }
    ,stores : {
        CodeList : {
             fields : [
                       'DB_NM'
                      ,'OWNER'
                      ,'TAB_NM'
                      ,'COL_NM'
                      ,'COL_HNM'
                      ,'COL_DESC'
                      ,'DATA_TYPE_NM'
                      ,'LEN'
                      ,'DECIMAL_CNT'
                      ,'DATA_TYPE_DESC'
                      ,'REG_DTM'
                      ,'REG_USR_ID'
                      ,'UPD_DTM'
                      ,'UPD_USR_ID'
                      ]
            ,proxy : {
                 type : 'ajax'
                ,url : '/dams/code/selectCodeList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                }
            }
        }
     }
});
