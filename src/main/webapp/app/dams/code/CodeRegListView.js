Ext.define('fframe.dams.code.CodeRegListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'codeRegList'
   ,controller : 'codeRegList'
   ,viewModel  : 'codeRegList'
   ,listeners  : { resize : 'setGridHeight' }
   //-------------------------------------------
   // Title
   //-------------------------------------------
   ,title : '코드 등록 조회'
   ,items :
    [
     //-------------------------------------------
     // Event
     //-------------------------------------------
     {
         xtype : 'toolbar'
        ,height : 50
        ,items : 
         [
           {xtype:'commcombo', value: 'CD_COL_UCD', width:150, addAll: true}
//           {xtype:'combo' , name:'searchCondition' , width:150 , displayField:'key' , valueField:'value' 
//                          , editable:false , queryMode:'local'
//                          , bind:{value:'{searchKeyCombo}' , store:'{searchCombo}'}
//           }
          ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
                              , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
                              , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
           }
          ,{xtype:'component' , anchor:'100%' , html:['&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' , '상태' , '&nbsp;&nbsp;']}
          ,{xtype:'combo' , name:'codeStatus' , width:90 , displayField:'key' , valueField:'value'
                          , editable:false , queryMode:'local'
                          , bind:{value:'{cdStsCd}' , store:'{codeStsCombo}'}
           }
          //,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
          //,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
          //,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
          ,'->'
          ,{xtype:'filefield' , buttonText:'업로드' , name:'uploadFile' , buttonOnly:false , allowBlank:false , buttonConfig:{iconCls:'fa-upload'}
                              , listeners:{afterrender:'multiple' , change:'excelUpload'}
           }
          ,{xtype:'button' , text:'신규' , handler:'initBtn', iconCls:'x-fa fa-plus-square'}
          ,{xtype:'button' , text:'저장' , handler:'saveBtn', iconCls:'x-fa fa-save'}
          ,{xtype:'button' , text:'삭제' , handler:'delBtn', iconCls:'x-fa fa-remove'}
          ,{xtype:'button' , text:'다운' , id:'excelDownBtn', handler:'excelDownBtn' , iconCls:'x-fa fa-download'}
          ,{xtype:'button' , text:'조회' , id:'selBtn', handler:'selBtn' , iconCls:'x-fa fa-gift'}
         ] 
     }
     //-------------------------------------------
     // Grid
     //-------------------------------------------
     ,{
         xtype      : 'grid'
        ,reference  : 'codeRegListGrid'     
        ,plugins    : [{ptype:'gridexporter'}]              
        ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']
        ,height     : 150 , frame: true , columnLines : true
        ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}         
        ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                
        ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
        ,columns    :
         [
           {text:'코드ID명'     , dataIndex:'CD_ID_NM'     , style:'text-align:center' , align:'left' , width:120 , editor:{xtype:'textfield'}}
          ,{text:'코드ID한글명' , dataIndex:'CD_ID_HNM'    , style:'text-align:center' , align:'left' , width:140, editor:{xtype:'textfield'}}
          ,{text:'코드그룹'     , dataIndex:'CD_ID_GRP_NM' , style:'text-align:center' , align:'left' , width:100, editor:{xtype:'textfield'}}
          ,{text:'코드'         , dataIndex:'CD'           , style:'text-align:center' , align:'left' , width:60 , editor:{xtype:'textfield'}}
          ,{text:'코드명'       , dataIndex:'CD_NM'        , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드한글명'   , dataIndex:'CD_HNM'       , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드설명'     , dataIndex:'CD_DESC'      , style:'text-align:center' , align:'left' , flex:1   , editor:{xtype:'textfield'}}
          ,{text:'코드유형코드' , dataIndex:'CD_TY_CD'     , style:'text-align:center' , align:'center' , editor:{xtype:'textfield'}}
          ,{text:'코드상태코드' , dataIndex:'CD_STS_CD'    , style:'text-align:center' , align:'center' , editor:{xtype:'textfield'}}
          ,{text:'등록일시'     , dataIndex:'REG_DTM'      , style:'text-align:center' , align:'center', flex:1}
          ,{text:'등록자'       , dataIndex:'REG_USR_ID'   , style:'text-align:center' , align:'left', flex:1}
          ,{text:'변경일시'     , dataIndex:'UPD_DTM'      , style:'text-align:center' , align:'center', flex:1}
          ,{text:'변경자'       , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , align:'left', flex:1}
         ]
        ,bind:{store:'{codeRegList}'}
     }
    ]
});