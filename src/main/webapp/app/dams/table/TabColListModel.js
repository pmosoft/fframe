Ext.define('fframe.dams.table.TabColListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabColList'
    ,data : {
        searchKeyCombo : 'COL_HNM'
       ,searchValue : ''
       ,termStsCd : '99'    
     }
    ,stores : {
        TabColList : {
             fields : [
                       'DB_NM'
                      ,'OWNER'
                      ,'TAB_NM'
                      ,'TAB_HNM'
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
                ,url : '/dams/table/selectTabColList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                }
            }
        }
     }
});
