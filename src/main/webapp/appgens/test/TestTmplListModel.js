Ext.define('$extjsPackNm$.$PgmNm$ListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.$PgmNm$List'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        $PgmNm$List : {
             fields : ['TITLE','CONTENT','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
            ,proxy : {
                 type : 'ajax'              
                ,url : '$restfulPackageName/$select$PgmNm$List'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'  
                }
            } 

        }
     } 
});
