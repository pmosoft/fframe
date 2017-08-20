Ext.define('fframe.dams.table.ExtractTabColListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.ExtractTabColList'
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
    ,insBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        
        Ext.Ajax.request({
            url : '/dams/table/insertCmpTabColInfoList',
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
        })     }
});
