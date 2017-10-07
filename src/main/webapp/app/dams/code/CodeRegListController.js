Ext.define('fframe.dams.code.CodeRegListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.codeRegList'
        
    /**********************************************************
     * Main Event
     *********************************************************/    
    ,initBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        Ext.toast({  html:"200라인 생성됩니다.",title:'알림',width: 200,align:'t',timeout: 500});

        store.removeAll();
        
        for(var i=0;i<=200;i++){
            newRecord = Ext.data.Record.create
            (
             [
              {name:'CD_ID_NM'    ,type:'string'}
             ,{name:'CD_ID_HNM'   ,type:'string'}
             ,{name:'CD_ID_GRP_NM',type:'string'}
             ,{name:'CD'          ,type:'string'}
             ,{name:'CD_NM'       ,type:'string'}
             ,{name:'CD_HNM'      ,type:'string'}
             ,{name:'CD_DESC'     ,type:'string'}
             ,{name:'CD_TY_CD'    ,type:'string'}
             ,{name:'CD_STS_CD'   ,type:'string'}
             ,{name:'REG_DTM'     ,type:'string'}
             ,{name:'REG_USR_ID'  ,type:'string'}
             ,{name:'UPD_DTM'     ,type:'string'}
             ,{name:'UPD_USR_ID'  ,type:'string'}
             ]
            );
            
            //store.insert(0,newRecord);
            store.add(newRecord);
            //Ext.Msg.alert("알림","200라인 생성되었습니다.");
        }    
     }
    
    ,saveBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        var grid = this.lookupReference('codeRegListGrid');
        var records = grid.getSelectionModel().getSelection();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);

        Ext.Ajax.request({
             url : '/dams/code/saveCode'
            ,method : 'post'
            ,params : { data:jsonDataEncode}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                    
                    store.getProxy().setExtraParam("searchKeyCombo",viewModel.get("searchKeyCombo"));
                    store.getProxy().setExtraParam("searchValue",viewModel.get("searchValue"));
                    store.load();
                    
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     
     }
    
    ,delBtn : function(btn) {
        //Ext.Msg.alert("알림","삭제");
        //click : this.insBtn
     }
    
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
    
    ,excelDownBtn : function(viewObj) {
        var view = this.getView(); var viewModel = view.getViewModel();  var store = viewModel.getStore(view['xtype']);
        
        var records = store.getRange();
        var datar = new Array(); var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);
        //console.log(jsonDataEncode);

        Ext.Ajax.request({
             url : '/comm/excel/downloadExcel'
            ,method : 'post'
            ,params : { data:jsonDataEncode,fileNm:'code.xls'}
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    location.href = "http://localhost:8080/files/excel/code.xls";
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    return;
                }
            }
        })     
     }
    ,excelUpload : function(obj) {
        var grid = this.lookupReference('codeRegListGrid');
        var store = grid.getStore();
        
        var frm = obj.up("form").getForm();
        //console.log("frm.getValues()="+frm.getValues());
        if(frm.isValid()) {
            frm.submit({
                 url: '/comm/excel/uploadExcel'
                ,success : function(fp, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    console.log("result)="+result);
                    if(result['isSuccess']){
                        store.removeAll();
                        for(var i=0;i<result.data.length;i++){
                            newRecord = Ext.data.Record.create
                            (
                             [
                              {name:'CD_ID_NM'    ,type:'string'}
                             ,{name:'CD_ID_HNM'   ,type:'string'}
                             ,{name:'CD_ID_GRP_NM',type:'string'}
                             ,{name:'CD'          ,type:'string'}
                             ,{name:'CD_NM'       ,type:'string'}
                             ,{name:'CD_HNM'      ,type:'string'}
                             ,{name:'CD_DESC'     ,type:'string'}
                             ,{name:'CD_TY_CD'    ,type:'string'}
                             ,{name:'CD_STS_CD'   ,type:'string'}
                             ,{name:'REG_DTM'     ,type:'string'}
                             ,{name:'REG_USR_ID'  ,type:'string'}
                             ,{name:'UPD_DTM'     ,type:'string'}
                             ,{name:'UPD_USR_ID'  ,type:'string'}
                             ]
                            );
                            newRecord.set('CD_ID_NM'    , result.data[i].CD_ID_NM    );
                            newRecord.set('CD_ID_HNM'   , result.data[i].CD_ID_HNM   );
                            newRecord.set('CD_ID_GRP_NM', result.data[i].CD_ID_GRP_NM);
                            newRecord.set('CD'          , result.data[i].CD          );
                            newRecord.set('CD_NM'       , result.data[i].CD_NM       );
                            newRecord.set('CD_HNM'      , result.data[i].CD_HNM      );
                            newRecord.set('CD_DESC'     , result.data[i].CD_DESC     );
                            newRecord.set('CD_TY_CD'    , result.data[i].CD_TY_CD   );
                            newRecord.set('CD_STS_CD'   , result.data[i].CD_STS_CD   );
                            newRecord.set('REG_DTM'     , ''     );
                            newRecord.set('REG_USR_ID'  , result.data[i].REG_USR_ID  );
                            newRecord.set('UPD_DTM'     , ''     );
                            newRecord.set('UPD_USR_ID'  , result.data[i].UPD_USR_ID  );
                            store.add(newRecord);
                        }    
                    } else {
                        Ext.Msg.alert("알림",result['errUsrMsg']);
                        return;
                    }
                    this.multiple;
                }
               ,failure: function(form, res) {
                    var result = Ext.JSON.decode(res.response.responseText);
                    Ext.Msg.alert('알림', result['errSysrMsg']);
                }
            });
        }
     }
    ,multiple : function(fileObj){ fileObj.fileInputEl.set({multiple:'multiple'});}        
        
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

