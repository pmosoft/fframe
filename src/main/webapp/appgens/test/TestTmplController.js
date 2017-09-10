Ext.define('$extjsPackNm$.$FileNm$ListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.$FileNm$List'
    ,setGridHeight : function(obj){ 
         obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
     }
    ,selBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
    	var searchValue = viewModel.get("searchValue");
    	var store = viewModel.getStore(view['xtype']);

    	store.getProxy().setExtraParam("searchValue",searchValue);
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
     }
    ,insBtn : function(btn) {
    	var userReg = Ext.create("$extjsPackNm$.$FileNm$RegView");
    	userReg.show();
     }
    ,delBtn : function(btn) {
     }
});
