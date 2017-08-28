Ext.define('fframe.dams.term.TermListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.TermList'
    ,setGridHeight : function(obj){ 
         obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
     }
    ,extBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.load({
            callback : function(data){
                console.log(data);
            }
        });
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
    	var userReg = Ext.create("fframe.dams.term.TermRegView");
    	userReg.show();
     }
    ,delBtn : function(btn) {
		//Ext.Msg.alert("알림","삭제");
    	//click : this.insBtn
     }
});
