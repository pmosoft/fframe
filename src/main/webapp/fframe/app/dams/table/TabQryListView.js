/*******************************************************************************
@title:테이블 데이터 조회 
@description-start
 1. 테이블목록 조회
 2. 쿼리 데이터 조회
@description-end  
@developer:피승현
@progress-rate:50%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2018.01.06|피승현|최초개발
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.dams.table.TabQryListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabQryList'
   ,controller : 'tabQryList'
   ,viewModel  : 'tabQryList'
   ,listeners  : { boxready:'dbConnCombo'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '테이블 데이터 조회'
   ,defaults: {
        bodyPadding: 10
        //,scrollable: true
    }   
   ,items :
    [ 
      //------------------------------------------------------------------------
      //                              테이블 조회
      //------------------------------------------------------------------------
      //--------------------------
      // toolbar
      //--------------------------
      {
          xtype  : 'toolbar'
         ,height : 50
         ,items  :
          [
            {xtype:'component' , html:['&nbsp;','DB선택','&nbsp;&nbsp;']}
           ,{xtype:'commCombo' , itemId:'DB_CONN_CD' , bind :{value:'{CD}'} , listeners:{select:'dbConnComboChg'}}
           ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{dbInfo}'}}
           ,{xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;&nbsp;']}             
           ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{TAB_NM}'}
               , emptyText:'검색어를 입력하세요' , enableKeyEvents: true 
               , listeners:{afterrender:function(field) {field.focus();} , specialkey: 'tabSelBtn'}
            }
           ,'->'
           ,{xtype:'button' , text:'조회' , handler:'tabSelBtn' , iconCls:'x-fa fa-gift'}
          ]
      }
      //--------------------------
      // grid
      //--------------------------
     ,{
          xtype      : 'grid'
         ,reference  : 'tabGridRef'        
         ,height     : 200 , frame: true , columnLines : true
         ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
         ,listeners  : {
              celldblclick : 'tabGridDblClick'
          }
         ,columns    : {
              defaults: {style:'text-align:center' , align:'left'}             
             ,items:   
              [ 
                {text:'DB명'         , dataIndex:'DB_NM'     , flex : 1}
               ,{text:'소유자'       , dataIndex:'OWNER'     , flex : 1}             
               ,{text:'테이블명'     , dataIndex:'TAB_NM'    , flex : 2}             
               ,{text:'테이블한글명' , dataIndex:'TAB_HNM'   , flex : 3}             
               ,{text:'건수'         , dataIndex:'ROW_CNT'   , flex : 1}
               ,{text:'테이블설명'   , dataIndex:'TABL_DESC' , flex : 4}
              ]
         }
        ,bind:{store:'{tabGrid}'}
      }

     //------------------------------------------------------------------------
     //                          테이블 데이터 조회
     //------------------------------------------------------------------------
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
     ,{
          xtype : 'toolbar'
         ,height : 100
         ,items : 
          [
            {xtype:'component' , html:['&nbsp;','쿼리','&nbsp;&nbsp;']}             
           ,{xtype:'textareafield' , name:'qry' ,flex :1 , bind :{value:'{qry}'}}
           ,'->'
           ,{xtype:'button' , text:'다운' , id:'excelDownBtn', handler:'excelDownBtn' , iconCls:'x-fa fa-download'}
           ,{xtype:'button' , text:'조회' , handler:'tabDataBtn' , iconCls:'x-fa fa-gift'}
          ]
      }

      //-------------------------------------------
      // toolbar
      //-------------------------------------------
     ,{
          xtype : 'toolbar'
         ,height : 30
         ,bind : '조회건수:{qryCnt}'
      }     
      //-------------------------------------------  
      // grid  
      //-------------------------------------------  
     ,{  
          xtype      : 'grid'  
         ,itemId     : 'qryGrid'           
         ,margin     : '0 0 0 1'  
         ,plugins    : [{ptype:'gridexporter'}]                
         ,requires   : ['Ext.grid.selection.SpreadsheetModel' , 'Ext.grid.plugin.Clipboard']  
         ,height     : 400 , frame: true , columnLines : false  
         ,selModel   : {type:'spreadsheet' , columnSelect:true , checkboxSelect:true , pruneRemoved:false , extensible:'y'}           
         ,plugins    : ['clipboard' , 'selectionreplicator' , 'cellediting']  //{ptype:'cellediting',clicksToEdit:2}                  
         ,viewConfig : {stripeRows:true} //,enableTextSelection: true,markDirty: false  
         //,resizable  : true  
         ,bind:{store:'{qryGrid}'}  
      }  
   ]
});
