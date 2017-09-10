Ext.define('$extjsPackNm$.$FileNm$ListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.$FileNm$List'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        $FileNm$List : {
             fields : ['TITLE','CONTENT','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
            ,proxy : {
                 type : 'ajax'              
                ,url : '$restfulPackageName/$select$FileNm$List'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'  
                }
            } 

        }
     } 
});
