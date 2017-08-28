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

    ,onSelectionChange: function (grid, selection) {
        var status = this.lookupReference('status'),
            message = '??',
            firstRowIndex,
            firstColumnIndex,
            lastRowIndex,
            lastColumnIndex;

        if (!selection) {
            message = 'No selection';
        }
        else if (selection.isCells) {
            firstRowIndex = selection.getFirstRowIndex();
            firstColumnIndex = selection.getFirstColumnIndex();
            lastRowIndex = selection.getLastRowIndex();
            lastColumnIndex = selection.getLastColumnIndex();

            message = 'Selected cells: ' + (lastColumnIndex - firstColumnIndex + 1) + 'x' + (lastRowIndex - firstRowIndex + 1) +
                ' at (' + firstColumnIndex + ',' + firstRowIndex + ')';
        }
        else if (selection.isRows) {
            message = 'Selected rows: ' + selection.getCount();
        }
        else if (selection.isColumns) {
            message = 'Selected columns: ' + selection.getCount();
        }
        onRefresh();
        status.update(message);
    }
    ,getSelectionModel: function () {
         //var view = this.getView(); var grid = view.down("grid");
        var grid = this.getView();
        return grid.getSelectionModel();
     }
    ,onRefresh: function () {
        var grid = this.getView();
        grid.bind.reload();
     }
    ,toggleRowSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
