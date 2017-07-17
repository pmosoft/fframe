Ext.define('fframe.view.syst.user.UserRegViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserRegView',
    onLoadData : function(obj){
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
    },	
    
    setGridHeight : function(obj){ 
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
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
