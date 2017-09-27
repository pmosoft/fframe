Ext.define('fframe.dams.code.CodeRegListController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.codeRegList'
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
        
        ,initBtn : function(btn) {
            var view = this.getView(); var viewModel = view.getViewModel();
            var store = viewModel.getStore(view['xtype']);
            var gridCnt = store.getCount();
            console.log("gridCnt=",gridCnt);
            
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
        
        ,saveBtn : function(obj) {
            var view = this.getView(); var viewModel = view.getViewModel();
            var store = viewModel.getStore(view['xtype']);
            var gridCnt = store.getCount();
            console.log("gridCnt=",gridCnt);

            var sm = this.getView().down("grid").getSelectionModel();
            var smCnt = sm.getCount();
            console.log("smCnt=",smCnt);
            
            for(var i=0;i<gridCnt;i++){
                var record = store.getAt(i)
                
                if(sm.isSelected(record)==true){
                    console.log("record=",record);
                }
            }
         }
        
        ,delBtn : function(btn) {
            //Ext.Msg.alert("알림","삭제");
            //click : this.insBtn
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

        ,excelDownBtn : function(viewObj) {

            var view = this.getView(); var viewModel = view.getViewModel();
            var params = viewModel.getData();
            var grid = viewObj.up("codeRegList").down("grid");
            var store = viewModel.getStore(view['xtype']);
            
            var sel = new Array();
            //var records = grid.getSelectionModel().getSelection();
            var records = store.getRange();
            
            //console.log(records.length);
            //console.log("records[0].data="+records[0].data);
            
            var datar = new Array(); 
            var jsonDataEncode = "";
            for (var i = 0; i < records.length; i++) {
                datar.push(records[i].data);
            }
            jsonDataEncode = Ext.util.JSON.encode(datar);
            
            console.log(jsonDataEncode);

            Ext.Ajax.request({
                 url : '/dams/code/excelCode'
                ,method : 'post'
                ,params : { data:jsonDataEncode,fileNm:'code.xls'}
                ,success : function(res){
                    var result = Ext.decode(res.responseText);
                    if(result['isSuccess']){
                        Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                        //window.location.assign("http://localhost:8080/files/excel/imsi.xls"));
                        //response.setContentType("Application/Msexcel");
                        //res.setHeader("Content-Disposition","attachment;filename=/files/excel/imsi.xls");
                        location.href = "http://localhost:8080/files/excel/code.xls";
                        

                    } else {
                        Ext.Msg.alert("알림",result['errUsrMsg']);
                        return;
                    }
                    
                }
            })     
         }
        ,excelUpload : function(obj) {
            var frm = obj.up("form").getForm();
            if(frm.isValid()) {
                frm.submit({
                     url: '/dams/code/uploadCodeRegList'
                    ,success : function(fp, res) {
                        var result = Ext.JSON.decode(res.response.responseText);
                        console.log(result);
                        
                        if(result['isSuccess']){
                            Ext.Msg.alert("알림","333");
                            //Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                        } else {
                            Ext.Msg.alert("알림",result['errUsrMsg']);
                            return;
                        }
                        //한번 submit 처리가 되면 filefield는 초기화 되므로
                        //다시 filefield에 multiple 속성 설정
                        this.multiple;
                        //obj.up("form").down("filefield").fileInputEl.set({multiple:'multiple'});
                    }
                });
            }
     
         }
        ,multiple : function(fileObj){ fileObj.fileInputEl.set({multiple:'multiple'});}        
        
    });
