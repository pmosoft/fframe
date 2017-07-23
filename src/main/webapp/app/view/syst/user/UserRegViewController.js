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
    	btn.up("window").down("[name=USER_EMAIL]").setValue("");
    	btn.up("window").down("[name=USER_PW]").setValue("");
    	btn.up("window").down("[name=USER_PW2]").setValue("");
    	btn.up("window").down("[name=USER_NM]").setValue("");
    	btn.up("window").down("[name=USER_AGE]").setValue("");
    	btn.up("window").down("[name=USE_YN]").setValue(true);
    },
    
    
    saveBtn : function(btn) {
		Ext.Msg.alert("알림","저장");
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
