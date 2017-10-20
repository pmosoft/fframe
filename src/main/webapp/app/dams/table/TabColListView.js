/*******************************************************************************
@title:테이블 컬럼 목록 
@description-start
@description-end  
@developer:피승현
@progress-rate:100%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.10.01|피승현|최초개발
|2017.10.10|피승현|주석정비
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.dams.table.TabColListView', {
     extend     : 'Ext.form.Panel' 
    ,xtype      : 'TabColList' 
    ,controller : 'TabColList' 
    ,viewModel  : 'TabColList'
    //,requires   : [ 'Ext.sparkline.Line' ]  
    ,listeners  : { resize : 'setGridHeight' }
//    ,initComponent: function() {
//        this.store = "SomeStore";
//
//        this.dockedItems = [{
//            xtype: 'toolbar',
//            dock: 'top',
//            items: [{
//                xtype: 'exporterbutton'
//            }];
//        this.columns = [/* YOUR COLUMNS */];
//        this.callParent(arguments);
//    }    
    
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '테이블컬럼 조회'
    ,items :
     [
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
      {
         xtype : 'toolbar'
        ,height : 50
        ,items : 
         [ 
           {xtype:'commCombo', id:'CD_COL_UCD', width:150, value:'TAB_HNM'}
          //{xtype:'commCombo2' , name:'searchCondition' , width:150 , bind:{value:'{searchKeyCombo}' , store:'{searchCombo}'}}
          ,{xtype:'textfield' , name:'searchValue' , width:200 , emptyText:'검색어를 입력하세요'
               , bind :{value:'{searchValue}'}  , enableKeyEvents: true 
               , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
           }
         ,'->'
         ,{xtype:'button' , text:'조회' ,id : 'selBtnId', handler:'selBtn' , iconCls: 'framing-buttons-add'}
        ] 
      }
      
      //-------------------------------------------
      // grid
      //-------------------------------------------
      ,{
          xtype      : 'grid'
          ,plugins    : [{ptype:'gridexporter'}]              
          ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']
          ,height     : 150 , frame: true , columnLines : true
          ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}         
          ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                
          ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
          ,forceFit: true
          ,margin:'0 0 0 0'
          ,columns :
          [
            {text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , flex:1}
           ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , flex:1}
           ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , flex:1}
           ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'        , style:'text-align:center' , flex:1}
           ,{text:'컬럼아이디'     , dataIndex:'COL_ID'         , style:'text-align:center' , flex:1}
           ,{text:'컬럼명'         , dataIndex:'COL_NM'         , style:'text-align:center' , flex:1}
           ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'        , style:'text-align:center' , flex:1}
           ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC' , style:'text-align:center' , flex:1}
           ,{text:'NULL'           , dataIndex:'NULLABLE'       , style:'text-align:center' , flex:1}
           ,{text:'PK'             , dataIndex:'PK'             , style:'text-align:center' , flex:1}
           ,{text:'데이터타입명'   , dataIndex:'DATA_TYPE_NM'   , style:'text-align:center' , flex:1}
           ,{text:'길이'           , dataIndex:'LEN'            , style:'text-align:center' , flex:1}
           ,{text:'소수점수'       , dataIndex:'DECIMAL_CNT'    , style:'text-align:center' , flex:1}
           ,{text:'컬럼설명'       , dataIndex:'COL_DESC'       , style:'text-align:center' , flex:1}
           ,{text:'등록일시'       , dataIndex:'REG_DTM'        , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
          ]
         ,bind:{store:'{TabColList}'}
     }
    ]
});