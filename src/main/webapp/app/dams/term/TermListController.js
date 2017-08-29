Ext.define('fframe.dams.term.TermListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.TermList'
        
    ,getSelectionModel: function () {
       var grid = this.getView().down("grid");
       return this.getView().down("grid").getSelectionModel();
    }
    ,onRefresh: function () {
        this.extBtn(this.getView().down("button"));
     }
    ,toggleRowSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        console.log(pressed);
        sel.setRowSelect(pressed);
     }
    ,toggleCellSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        sel.setCellSelect(pressed);
        
     }
    ,toggleColumnSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        sel.setColumnSelect(pressed);
     }    
    
    
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
