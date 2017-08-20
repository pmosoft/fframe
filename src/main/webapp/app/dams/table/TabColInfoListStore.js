Ext.define('fframe.dams.table.TabColInfoListStore', {
     extend: 'Ext.data.BufferedStore'
    ,alias: 'store.TabColInfoList'
    ,storedId : 'TabColInfoList'
    ,autoLoad : false
    ,fields : [
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
        ,url : '/dams/table/selectTabColInfoList'
        ,reader : {
             type : 'json'
            ,rootProperty : 'data'
            .totalProperty : 'total'    
        }
    }
});
