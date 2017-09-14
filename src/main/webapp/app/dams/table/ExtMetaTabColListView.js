Ext.define('fframe.dams.table.ExtMetaTabColListView', {
     extend     : 'Ext.form.Panel'
    ,xtype      : 'ExtMetaTabColList'
    ,controller : 'ExtMetaTabColList'
    ,viewModel  : 'ExtMetaTabColList'
    ,listeners  : {
         resize : 'setGridHeight'
    }
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '메타 테이블정보 추출'
    ,items :
     [
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
      {
           xtype : 'toolbar'
          ,items :
           [
             {text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
            ,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
            ,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
            ,'->'
            ,{xtype:'button' ,text:'추출'       , handler:'extBtn'}
            ,{xtype:'button' ,text:'비교'       , handler:'cmpBtn'}
            ,{xtype:'button' ,text:'테이블정보삭제' , handler:'tabDelBtn'}
            ,{xtype:'button' ,text:'반영'       , handler:'insBtn'}
           ]
      }
      //-------------------------------------------
      // grid
      //-------------------------------------------
     ,{
          xtype : 'grid'
         ,height : 150
         ,requires: 
          [
              'Ext.grid.selection.SpreadsheetModel'
             ,'Ext.grid.plugin.Clipboard'
          ]
         ,height : 150
         ,frame: true         
         ,columnLines : true
         ,selModel: {
             type: 'spreadsheet',
             // Disables sorting by header click, though it will be still available via menu
             columnSelect: true,
             checkboxSelect: true,
             pruneRemoved: false,
             extensible: 'y'
          }         
         ,plugins: 
          [
              'clipboard'
             ,'selectionreplicator'
          ]         
          //,plugins : {ptype:'cellediting',clicksToEdit:2}                
         ,viewConfig: {
             stripeRows: false
             //,enableTextSelection: true
             //,markDirty: false
          }
         ,columns :
          [
           {text:'상태'           , dataIndex:'STS_NM'         , style:'text-align:center' , flex:1}
          ,{text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , flex:1}
          ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , flex:1}
          ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , flex:1}
          ,{text:'컬럼아이디'     , dataIndex:'COL_ID'         , style:'text-align:center' , flex:1}
          ,{text:'컬럼명'         , dataIndex:'COL_NM'         , style:'text-align:center' , flex:1}
          ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'        , style:'text-align:center' , flex:1}
          ,{text:'컬럼설명'       , dataIndex:'COL_DESC'       , style:'text-align:center' , flex:1}
          ,{text:'데이터타입명'   , dataIndex:'DATA_TYPE_NM'   , style:'text-align:center' , flex:1}
          ,{text:'길이'           , dataIndex:'LEN'            , style:'text-align:center' , flex:1}
          ,{text:'소수점수'       , dataIndex:'DECIMAL_CNT'    , style:'text-align:center' , flex:1}
          ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC' , style:'text-align:center' , flex:1}
          ,{text:'등록일시'       , dataIndex:'REG_DTM'        , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
          ]
         ,forceFit: true         
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
