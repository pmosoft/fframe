Ext.define('fframe.app.dams.table.TabQryListController', {
    extend : 'Ext.app.ViewController'
   ,alias : 'controller.tabQryList'
       
   /**********************************************************
    * Main Event
    *********************************************************/    

   /***********************
    * DB접속콤보 로드
    ***********************/    
   ,dbConnCombo : function(obj){
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
   /**********************
    * DB접속콤보 변경
    *********************/     
   ,dbConnComboChg : function(obj) {
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

    /***************
     * 테이블 조회
     ***************/    
    ,tabSelBtn : function(btn) {
         var view = this.getView(); var viewModel = view.getViewModel();  
         var store = viewModel.getStore('tabGrid'); 
        
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
         store.getProxy().setExtraParam("TAB_NM"   ,viewModel.data.TAB_NM);         
         store.load({         
             callback : function(data){         
                 console.log(data);         
             }         
         });         
     }    
    
    /**********************     
     * 테이블 조회 쿼리 작성     
     **********************/         
    ,tabGridDblClick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {     
         var view = this.getView(); var viewModel = view.getViewModel();
         console.log("111111111111111111111");
         viewModel.set("qry"  ,"SELECT * FROM "+record.get("OWNER")+"."+record.get("TAB_NM"));
     }    

    /**********************     
     * 쿼리 조회     
     **********************/         
    ,tabDataBtn : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {     
         var view = this.getView(); var viewModel = view.getViewModel();     
         var store = viewModel.getStore('tabQryGrid');     
         var grid = view.down("#tabQryGridRef");     
         console.log("grid="+grid);     
              
         store.proxy.setUrl("/dams/table/selectQryData");     
              
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
         store.getProxy().setExtraParam("qry"       ,viewModel.data.qry);     
                  
         store.load({     
             callback : function(data,result,success){     
                 if(success) {     
                     result = Ext.JSON.decode(result._response.responseText);     
                     data = result['data'];
                     console.log("data="+data);     
                     
                     //combo.setValue(data[0].CD);     
                          
                     var model2 = [];     
                     for (var i = 0; i < data.length; i++) {     
                         model2.push({ text: data[i].COL_HNM, dataIndex: data[i].COL_NM } );
                         console.log("data[i].COL_HNM="+data[i].COL_HNM);
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
//             //        , data : [ { title1 : '첫번째 값', title2 : '두번째 값', title3 : '세번째 값', title4 : '네번째 값' } ]     //                     , proxy : { type : 'memory' } });});
//         var model2 = [];
//         for(var i=0; i<4; i++) { //             model2.push({ text: 'Title'+(i+1), flex: 1, dataIndex: 'title'+(i+1) } ); //         }//         //         //grid.reconfigure(store2,model2);//         grid.reconfigure(model2);               }
 });     
     
     