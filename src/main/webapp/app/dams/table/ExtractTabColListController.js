Ext.define('fframe.dams.table.ExtractTabColListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.ExtractTabColList'
    ,setGridHeight : function(obj){
         obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
     }
    ,extBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
    	store.getProxy().setExtraParam("step","1");
        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }
    ,cmpBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.getProxy().setExtraParam("step","2");
        store.load();
     }
    ,insBtn : function(btn) {
    	var userReg = Ext.create("fframe.dams.table.TabColInfoRegView");
    	userReg.show();
     }
});
