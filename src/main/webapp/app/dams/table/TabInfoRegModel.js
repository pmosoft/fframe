Ext.define('fframe.dams.table.TabInfoRegModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TabInfoReg',
    data : {
		PKG_FUL_NM : ""
	   ,PKG2_NM    : ""
	   ,PKG3_NM    : ""
	   ,PKG4_NM    : ""
	   ,PKG_HNM    : ""
	   ,PKG_DESC   : ""
	   ,USE_YN     : ""
	   ,REG_DT     : ""
	   ,REG_USR_ID : ""
	   ,UPD_DT     : ""
	   ,UPD_USR_ID : ""
    },
    stores : {
    	TabInfoReg : {
    	}
    }
});


