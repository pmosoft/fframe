Ext.define('fframe.dams.table.TabListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.TabList'
    /**********************************************************
     * Main Event
     *********************************************************/    

    /***************
     * 조회
     ***************/    
    ,selBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
        store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
        store.load();
     }
    ,searchBtn : function(f,e,op) {
        if (e.getKey() == e.ENTER) {
            this.selBtn();
        }
     }
    
    /**********************************************************
     * Grid
     *********************************************************/    
    ,setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
     }
    
    /**********************************************************
     * Clipboard
     *********************************************************/    
 //   ,getSelectionModel: function () {
//        var grid = this.getView().down("grid");
//        return this.getView().down("grid").getSelectionModel();
//     }
 //   ,onRefresh: function () {
//        this.extBtn(this.getView().down("button"));
//     }
 //   ,toggleRowSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setRowSelect(pressed);
//     }
 //   ,toggleCellSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setCellSelect(pressed);
//     }
 //   ,toggleColumnSelect: function(button, pressed) {
//        var sel = this.getSelectionModel();
//        sel.setColumnSelect(pressed);
//     }    
     
 });


