Ext.define('fframe.dams.table.CodeListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.CodeList'
        
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
         obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
     }
    ,selBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
    	var store = viewModel.getStore(view['xtype']);

        store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
    	store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
    	store.load({
    		callback : function(data){
    			console.log(data);
    		}
    	});
     }
    ,insBtn : function(btn) {
    	var userReg = Ext.create("fframe.dams.code.TabColRegView");
    	userReg.show();
     }
    ,delBtn : function(btn) {
		//Ext.Msg.alert("알림","삭제");
    	//click : this.insBtn
     }
});
