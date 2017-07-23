Ext.define('fframe.view.syst.user.UserRegViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserRegView',
    onLoadData : function(obj){
    	console.log("store");
    	var view = this.getView();
    	var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
    },	

    initBtn : function(btn) {
<<<<<<< HEAD
    	var view = this.getView(); var viewModel = view.getViewModel();
    	viewModel.set("USER_ID"   ,"aaa");
    	viewModel.set("USER_EMAIL","");
    	viewModel.set("USER_PW"   ,"");
    	viewModel.set("USER_PW2"  ,"");
    	viewModel.set("USER_NM"   ,"");
    	viewModel.set("USER_AGE"  ,"40");
    	viewModel.set("USE_YN"    ,true);
    	viewModel.set("UPD_DT"    ,"<span style='color:green;'>2017.07.03 16:40:20</span>");
    	viewModel.set("UPD_USER"  ,"<span style='color:green;'>admin</span>");
=======
    	btn.up("window").down("[name=USER_EMAIL]").setValue("");
    	btn.up("window").down("[name=USER_PW]").setValue("");
    	btn.up("window").down("[name=USER_PW2]").setValue("");
    	btn.up("window").down("[name=USER_NM]").setValue("");
    	btn.up("window").down("[name=USER_AGE]").setValue("");
    	btn.up("window").down("[name=USE_YN]").setValue(true);
>>>>>>> branch 'master' of https://github.com/pmosoft/fframe.git
    },
    
    
    saveBtn : function(btn) {
<<<<<<< HEAD
    	var view = this.getView(); var viewModel = view.getViewModel();
    	var params = viewModel.getData();
    	console.log(params);
    	
    	Ext.Ajax.request({
    		url : '/usr/saveUser',
    		method : 'post',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			if(result['code'] == 200){
    				//Ext.Msg.alert("알림"),"aaaa");
    			} else {
    				//Ext.Msg.alert("알림"),result['msg']);
=======
    	var USER_EMAIL= btn.up("window").down("[name=USER_EMAIL]").getValue();
    	var USER_PW   = btn.up("window").down("[name=USER_PW]").getValue();
    	var USER_PW2  = btn.up("window").down("[name=USER_PW2]").getValue();
    	var USER_NM   = btn.up("window").down("[name=USER_NM]").getValue();
    	var USER_AGE  = btn.up("window").down("[name=USER_AGE]").getValue();
    	var USE_YN    = btn.up("window").down("[name=USE_YN]").getValue();
    	
    	Ext.Ajax.request({
    		url : '',
    		method : '',
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			if(result['code'] == 200){
    				Ext.Msg.alert("알림"),"aaaa");
    			} else {
    				Ext.Msg.alert("알림"),result['msg']);
>>>>>>> branch 'master' of https://github.com/pmosoft/fframe.git
    				return;
    			}
    			
    		}
    	})
    },
    
    delBtn : function(btn) {
		this.getView().close();
    },    

    closeBtn : function(btn) {
		this.getView().close();
    },    
    
    
    selBtn : function(btn) {
    	console.log("store");
    	var view = this.getView();
    	var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	console.log("store");
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
    }    
});
