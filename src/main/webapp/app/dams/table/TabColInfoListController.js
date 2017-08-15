Ext.define('fframe.dams.table.TabColInfoListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.TabColInfoList'
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
    	var userReg = Ext.create("fframe.dams.table.TabColInfoRegView");
    	userReg.show();
     }
    ,delBtn : function(btn) {
		//Ext.Msg.alert("알림","삭제");
    	//click : this.insBtn
     }
});
