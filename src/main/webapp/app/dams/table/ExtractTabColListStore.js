Ext.define('fframe.dams.table.ExtractTabColListStore', {
     extend: 'Ext.data.BufferedStore'
    ,alias: 'store.ExtractTabColList'
    ,storedId : 'ExtractTabColList'
    ,autoLoad : false
    ,fields : [
               'STS_NM'
              ,'DB_NM'
              ,'OWNER'
              ,'TAB_NM'
              ,'COL_ID'
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
        ,url : '/dams/table/selectMetaTabColInfoList'
        ,reader : {
             type : 'json' 
            ,rootProperty : 'data'
        }
    }
});
    