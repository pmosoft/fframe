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
    },
    
    
    saveBtn : function(btn) {
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