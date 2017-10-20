Ext.define('fframe.dams.table.TabListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabList'
    ,data : {
        searchKeyCombo : 'TAB_HNM'
       ,searchValue : ''    
     }
    ,stores : {
        TabList : {
             fields : [
                        'DB_NM'
                       ,'OWNER'
                       ,'TAB_NM'
                       ,'TAB_HNM'
                       ,'TAB_DESC'
                       ,'REG_DTM'
                       ,'REG_USR_ID'
                       ,'UPD_DTM'
                       ,'UPD_USR_ID'
                      ]
            ,proxy : {
                 type : 'ajax'
                ,url : '/dams/table/selectTabList'
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
