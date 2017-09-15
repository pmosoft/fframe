Ext.define('fframe.dams.table.TabColListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabColList'
    ,data : {
        searchKeyCombo : 'TAB_HNM'
       ,searchValue : ''
       ,termStsCd : '99'    
     }
    ,stores : {
        TabColList : {
             fields : [
                        'DB_NM'
                       ,'OWNER'
                       ,'TAB_NM'
                       ,'COL_ID'
                       ,'COL_NM'
                       ,'COL_HNM'
                       ,'DATA_TYPE_DESC'
                       ,'NULL_YN'
                       ,'PK_YN'
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
