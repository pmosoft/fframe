Ext.define('fframe.gens.core.TmplPgmRegController', {
     extend: 'Ext.app.ViewController'
    ,alias: 'controller.TmplPgmReg'
    ,saveBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        console.log(params);
        
        Ext.Ajax.request({
            url : '/gens/pgm/genPgm',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['userMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })
     }    
});
