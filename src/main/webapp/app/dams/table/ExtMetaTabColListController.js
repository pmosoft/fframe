Ext.define('fframe.dams.table.ExtMetaTabColListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.ExtMetaTabColList'
        
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

    ,extBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        console.log("view['xtype']="+view['xtype']);

    	store.getProxy().setExtraParam("step","1");
        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }
    ,cmpBtn : function(btn) {
        var view = this.getView(); 
        var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.getProxy().setExtraParam("step","2");
        store.load();
     }
    ,tabDelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        var grid = btn.up("ExtMetaTabColList").down("grid");
        console.log("grid="+grid);
        
        //var record = grid.getSelectionModel().getSelected();        
        //console.log("record="+record);
        
        var sel = new Array();
        var records = grid.getSelectionModel().getSelection();
        console.log("records="+records.length);
        
        console.log("records 1="+records[1].get('TAB_NM'));
        
        //for(int i = 0; i < records.length; i++){
        //  sel.push(records[i].data.id);
        //  console.log("i="+i);
        //}        
        
        var record = grid.getStore().getAt(1);     // 레코드의 Row를 가져온다.
        //var fieldName = grid.getColumnModel().getDataIndex(1);  // 컬럼의 필드명을 가져온다.
        //var data = record.get(fieldName);      // 컬럼의 데이터를 가져온다.
        console.log("record.data="+record.data);
        
        console.log("record.data.TAB_NM="+record.data.TAB_NM);
        console.log("record.get="+record.get('TAB_NM'));
        
        
        //console.log("fieldName="+fieldName);
        //console.log("data="+data);
        //var colcnt = grid.getColumnModel().getColumnCount();
        //console.log("colcnt="+colcnt);
        
        //Ext.Ajax.request({
        //    url: 'YOUR_URL',
        //    params: { 
        //       gridData: Ext.util.JSON.encode(gridData)
        //    }
        //});        

        Ext.Ajax.request({
             url : '/dams/table/deleteTabCol'
            ,method : 'post'
            ,params : {  gridData: Ext.util.JSON.encode(records) }
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['msg']);
                    Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     
        
        
        
     
     }
    ,insBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        
        Ext.Ajax.request({
            url : '/dams/table/insertCmpTabColList',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['msg']);
                    Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     
     }
});
