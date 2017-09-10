Ext.define('fframe.gens.test.TestTmplListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TestTmplList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        TestTmplList : {
             fields : ['TITLE','CONTENT','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
            ,proxy : {
                 type : 'ajax'              
                ,url : '/gens/test/selectTestTmplList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'  
                }
            } 

        }
     } 
});
