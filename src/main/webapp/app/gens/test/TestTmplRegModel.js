Ext.define('fframe.gens.test.TestTmplRegModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TestTmplReg',
    data : {
		TITLE      : "" 
	   ,CONTENT    : ""
	   ,REG_DT     : ""
	   ,REG_USR_ID : ""
	   ,UPD_DT     : ""
	   ,UPD_USR_ID : ""
    },    
    stores : {
    	TestTmplReg : {
    	}
    }
});


