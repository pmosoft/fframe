Ext.define('fframe.view.syst.user.UserRegViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UserRegView',
    data : {
		USER_ID    : "" 
	   ,USER_EMAIL : ""
	   ,USER_PW    : "" 
	   ,USER_PW2   : ""
	   ,USER_NM    : "" 
	   ,USER_AGE   : "40"
	   ,USE_YN     : true  
	   ,REG_DT     : ""  
	   ,REG_USER   : ""
	   ,UPD_DT     : ""  
	   ,UPD_USER   : ""
    },    
    stores : {
    	UserRegView : {
    	}
    }
});

