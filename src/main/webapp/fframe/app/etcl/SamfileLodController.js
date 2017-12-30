Ext.define('fframe.app.etcl.SamfileLodController', {
     extend : 'Ext.app.ViewController'
    ,alias : 'controller.samfileLod'
        
    /**********************************************************
     * Main Event
     *********************************************************/    

    /****************
     * 코드로드
     ****************/    
    ,comboLoad : function(obj){
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        combo.store.getProxy().setExtraParam("CD_ID_NM",combo.itemId);
        combo.getStore().load({
            callback : function(data,result,success){
                if(success) {
                    result = Ext.JSON.decode(result._response.responseText);
                    data = result['data'];
                    //combo.setValue(data[0].CD);                    
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].CD == combo.value) {
                            viewModel.set("CD_ID_NM"  ,data[i].CD_ID_NM);
                            viewModel.set("CD"        ,data[i].CD);
                            viewModel.set("dbInfo"    ,data[i].CD_DESC);
                            viewModel.set("datasource",data[i].CD_PARAM1);
                            viewModel.set("dbDriver"  ,data[i].CD_PARAM2);
                            viewModel.set("dbConn"    ,data[i].CD_PARAM3);
                            viewModel.set("dbUser"    ,data[i].CD_PARAM4);
                            viewModel.set("dbPassword",data[i].CD_PARAM5);
                            viewModel.set("dbType"    ,data[i].CD_PARAM6);
                            viewModel.set("dbOwner"   ,data[i].CD_PARAM7);
                        }
                    }                    
                }
            }
        })
     }﻿        
        
    /****************
     * 코드 콤보 변경
     ****************/    
    ,codeChange : function(obj) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        var combo = view.down("#DB_CONN_CD");
        var records = combo.store.getRange(); 
        var j = 0;
        console.log("combo.value="+combo.value);
        for (var i = 0; i < records.length; i++) {
            if(records[i].data.CD == combo.value) {
                viewModel.set("CD_ID_NM"  ,records[i].data.CD_ID_NM);
                viewModel.set("CD"        ,records[i].data.CD);
                viewModel.set("dbInfo"    ,records[i].data.CD_DESC);
                viewModel.set("datasource",records[i].data.CD_PARAM1);
                viewModel.set("dbDriver"  ,records[i].data.CD_PARAM2);
                viewModel.set("dbConn"    ,records[i].data.CD_PARAM3);
                viewModel.set("dbUser"    ,records[i].data.CD_PARAM4);
                viewModel.set("dbPassword",records[i].data.CD_PARAM5);
                viewModel.set("dbType"    ,records[i].data.CD_PARAM6);
                viewModel.set("dbOwner"   ,records[i].data.CD_PARAM7);
                viewModel.set("searchKeyCombo" ,records[i].data.CD_NM);
                
            }
        }
        //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
     }

     /****************
      * 코드확장 조회
      ****************/    
     ,tabBtn2 : function(obj) {
         var view = this.getView(); var viewModel = view.getViewModel();
         var store = viewModel.getStore(view['xtype']);
         var combo = view.down("#TAB_LIST");
         var records = combo.store.getRange(); 
         var j = 0;
         console.log("combo.value="+combo.value);
         console.log("records[i].data.key="+records[0].data.key);
//         for (var i = 0; i < records.length; i++) {
//             if(records[i].data.CD == combo.value) {
//                 viewModel.set("CD_ID_NM"  ,records[i].data.CD_ID_NM);
//                 viewModel.set("CD"        ,records[i].data.CD);
//                 
//             }
//         }
         //console.log("commCombo.store.getAt(0).get('value')"+commCombo.store.getAt(0).get('value'));
      }

     /**********************
      * 테이블 그리드 조회
      **********************/    
     ,tabGrid : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {
         var view = this.getView(); var viewModel = view.getViewModel();
         var store = viewModel.getStore('tabLod');
         var grid = view.down("#tabGrid");
         console.log("grid="+grid);

         
         store.proxy.setUrl("/dams/table/selectMetaTabColList");
         
         store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
         store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
         store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
         store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
         store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
         store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
         store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
         store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
         store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
         store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);

         store.getProxy().setExtraParam("TAB_NM"   ,record.get("TAB_NM"));
         viewModel.set("TAB_NM"  , record.get("TAB_NM"));
             
         store.load({
             
             callback : function(data,result,success){
                 if(success) {
                     result = Ext.JSON.decode(result._response.responseText);
                     data = result['data'];
                     //combo.setValue(data[0].CD);
                     
                     var model2 = [];
                     for (var i = 0; i < data.length; i++) {
                         model2.push({ text: data[i].COL_HNM, dataIndex: data[i].COL_NM } ); 
                     }
                     
                     viewModel.set("colCnt"  , data.length);

                     fields = [];

                     for (var i = 0; i < data.length; i++) {
                         fields.push({ name: data[i].COL_NM , type : 'string' }); 
                     }
                     
                     //store.setFields(fields);
                     //console.log("store.getFields()="+store.getFields());

                     //model.setFields(fieldsArray)
                     
                     //grid.reconfigure(store2,model2);
                     grid.reconfigure(model2);         
                     
                 }
             }
         });
         
         
//         var store2 = Ext.create('Ext.data.Store',{ 
//                      fields : ['title1','title2','title3',  'title4'  ]
//             //        , data : [ { title1 : '첫번째 값', title2 : '두번째 값', title3 : '세번째 값', title4 : '네번째 값' } ]
//                     , proxy : { type : 'memory' } });
//         var model2 = [];
//         for(var i=0; i<4; i++) { 
//             model2.push({ text: 'Title'+(i+1), flex: 1, dataIndex: 'title'+(i+1) } ); 
//         }
//         
//         //grid.reconfigure(store2,model2);
//         grid.reconfigure(model2);         
      }
     
     
     
    /**************
     * 테이블 검색
     **************/    
    ,tabBtn : function(btn) {
    	var view = this.getView(); var viewModel = view.getViewModel(); 
    	var store = viewModel.getStore(view['xtype']);
        console.log("view['xtype']="+view['xtype']);
        store.proxy.setUrl("/dams/table/selectMetaTabList");

        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);

        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }

    /**************
     * 샘플테이블데이터  검색
     **************/    
    ,samSelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); 
        var store = viewModel.getStore('tabLod');
        var grid = view.down("#tabGrid");
        var gridStore = grid.getStore();
        
        console.log("view['xtype']="+view['xtype']);
        store.proxy.setUrl("/dams/table/selectTabData");

        console.log("viewModel.data.datasource="+viewModel.data.datasource);
        
        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);

        store.load({
            callback : function(data,result,success){

                result = Ext.JSON.decode(result._response.responseText);
                data = result['data'];

                console.log(data);
                
                console.log(data[0][0]);
                console.log(data[0][1]);
                console.log(data[1][1]);
                console.log(data.keys());
                
                var array2 = new Array();
                for (var key in data[0]) {
                  array2.push(data[0][value]);
                }
                console.log(array2);

//                for (var i = 0; i < data.length; i++) {
//                    
//                    model2.push({ text: data[i].COL_HNM, dataIndex: data[i].COL_NM } ); 
//                    newRecord = Ext.data.Record.create
//                    (
//                     [
//                       {name:'CD_ID_NM'        ,type:'string'}
//                     ]
//                    );
//                    newRecord.set('CD_ID_NM'      , result.data[i].CD_ID_NM      );
//                    gridStore.add(newRecord);
//                }
//                
            }
        });
     }
    
        
    
    /**************
     * 테이블 검색
     **************/    
    ,tabDataBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        console.log("view['xtype']="+view['xtype']);
        store.proxy.setUrl("/dams/table/selectMetaTabList");

        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.getProxy().setExtraParam("TAB_NM"    ,viewModel.data.TAB_NM);

        store.load({
            callback : function(data){
                console.log(data);
            }
        });
     }
    
    
    
    ,searchBtn : function(f,e,op) {
        if (e.getKey() == e.ENTER) {
            this.tabBtn();
        }
     }

    ,excelUpload : function(obj) {
        var frm = obj.up("form").getForm();
        console.log("frm.getValues()="+frm.getValues());
     }
    ,multiple : function(fileObj){ fileObj.fileInputEl.set({multiple:'multiple'});}        
    
    /*********
     * 비교
     *********/    
    ,cmpBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel(); var store = viewModel.getStore(view['xtype']);
        store.proxy.setUrl("/etcl/selectCmpTabColList");
        store.getProxy().setExtraParam("CD_ID_NM"  ,viewModel.data.CD_ID_NM  );
        store.getProxy().setExtraParam("CD"        ,viewModel.data.CD        );
        store.getProxy().setExtraParam("dbInfo"    ,viewModel.data.dbInfo    );
        store.getProxy().setExtraParam("datasource",viewModel.data.datasource);
        store.getProxy().setExtraParam("dbDriver"  ,viewModel.data.dbDriver  );
        store.getProxy().setExtraParam("dbConn"    ,viewModel.data.dbConn    );
        store.getProxy().setExtraParam("dbUser"    ,viewModel.data.dbUser    );
        store.getProxy().setExtraParam("dbPassword",viewModel.data.dbPassword);
        store.getProxy().setExtraParam("dbType"    ,viewModel.data.dbType);
        store.getProxy().setExtraParam("dbOwner"   ,viewModel.data.dbOwner);
        store.load();
     }

    /******************
     * 테이블정보삭제
     ******************/    
    ,tabDelBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        var grid = btn.up("samfileLod").down("grid");
        console.log("grid="+grid);
        
        //var record = grid.getSelectionModel().getSelected();        
        //console.log("record="+record);
        
        var sel = new Array();
        var records = grid.getSelectionModel().getSelection();
        console.log("records="+records.length);

        var datar = new Array();
        var jsonDataEncode = "";
        for (var i = 0; i < records.length; i++) {
            datar.push(records[i].data);
        }
        jsonDataEncode = Ext.util.JSON.encode(datar);

        console.log("jsonDataEncode="+jsonDataEncode);
        
        
        //console.log("records 1="+records[1].get('TAB_NM'));
        
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
        
        console.log("record.data="+record.data);
        
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
             url : '/etcl/deleteTabCol'
            ,method : 'post'
            //,params : { data:"[{aa:11,bb:22},{aa:1,bb:22}]"}
            ,params : { data:jsonDataEncode}
            //,params : { aa:record.data,bb:"22"}                    
            ,success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['usrMsg']);
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                    //this.cmpBtn();
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     

        
//        var view = this.getView(); 
//        var viewModel = view.getViewModel();
//        //var store = viewModel.getStore('DelTabColList');
//        var store = viewModel.getStore('samfileLod');
//        //store.load();
//        store.sync();        
     
     }
    
    /*********
     * 반영
     ********/    
    ,insBtn : function(btn) {
        var view = this.getView(); var viewModel = view.getViewModel();
        var params = viewModel.getData();
        
        Ext.Ajax.request({
            url : '/etcl/insertCmpTabColList',
            method : 'post',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['isSuccess']){
                    //Ext.Msg.alert("알림",result['usrMsg']);
                    Ext.toast({  html:result['usrMsg'],title:'알림',width: 200,align:'t',timeout: 500});
                } else {
                    Ext.Msg.alert("알림",result['errUsrMsg']);
                    //Ext.Msg.alert("알림",result['errSysMsg']);
                    return;
                }
                
            }
        })     
     }
    
    /**********************************************************
     * Grid
     *********************************************************/    
    ,setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-180);
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

