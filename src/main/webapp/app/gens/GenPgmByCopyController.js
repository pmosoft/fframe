Ext.define('fframe.gens.GenPgmByCopyController', {
     extend: 'Ext.app.ViewController'
    ,alias: 'controller.genPgmByCopy'
    ,saveBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        console.log(params);
        
        Ext.Ajax.request({
            url : '/gens/pgm/genPgmByTmpl',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })
     }
    ,copyBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        console.log(params);
        
        Ext.Ajax.request({
            url : '/gens/pgm/genPgmByCopy',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })
     }    
});
