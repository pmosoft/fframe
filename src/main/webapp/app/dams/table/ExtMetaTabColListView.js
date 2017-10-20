/*******************************************************************************
@title:메타 테이블 정보 추출 
@description-start
 1. 메타테이블 정보 추출
   - 콤보박스에서 DB선택하면 DB접속정보를 코드 및 코드확장에서 가져온다
   - 추출버튼 클릭하면 그리드에 출력
 2. 비교기능
   - 추출된 테이블 정보와 현재 저장된 테이블 정보를 비교하여 변경내용을 표시
 3. 테이블정보삭제
   - 저장된 테이블 정보를 삭제한다
 4. 테이블정보 반영
   - 신규 및 변경 메타테이블정보를 저장한다
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
Ext.define('fframe.dams.table.ExtMetaTabColListView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'ExtMetaTabColList'
   ,controller : 'ExtMetaTabColList'
   ,viewModel  : 'ExtMetaTabColList'
   ,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '메타 테이블 정보 추출'
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
          {xtype:'component', html:['&nbsp;','DB선택','&nbsp;&nbsp;']}             

         ,{xtype:'commCombo' , itemId:'DB_CONN_CD' ,value : 'FFRAME' , listeners:{select:'codeExt'}}
         ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{dbInfo}'}}
         ,'->'
         ,{xtype:'button' , text:'추출'           , handler:'extBtn'}
         ,{xtype:'button' , text:'비교'           , handler:'cmpBtn'}
         ,{xtype:'button' , text:'테이블정보삭제' , handler:'tabDelBtn'}
         ,{xtype:'button' , text:'반영'           , handler:'insBtn'}
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
       ,columns :
       [
        {text:'상태'           , dataIndex:'STS_NM'         , style:'text-align:center' , flex:1}
       ,{text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , flex:1}
       ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , flex:1}
       ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , flex:1}
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
      ,bind:{store:'{ExtMetaTabColList}'}
      //,bbar : {
      //     xtype : 'pagingtoolbar'
      //    ,plugins : 'ux-progressbarpager'
      //    //,plugins : 'ux-slidingpager',
      //    ,display : true
      // }
    }
   ]
});
