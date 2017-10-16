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
                ,url : '/dams/table/selectTabColList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                }
            }
        }
        ,searchCombo : {
            fields : ['key','value'] 
           ,data : 
            [
              {key : '테이블한글명', value : 'TAB_HNM'}
             ,{key : '테이블명'    , value : 'TAB_NM'}
             ,{key : '컬럼한글명'  , value : 'COL_HNM'}
             ,{key : '컬럼명'      , value : 'COL_NM'}
            ]
         }
    
     }
});
