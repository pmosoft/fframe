Ext.define('fframe.dams.table.CodeListView', {
     extend     : 'Ext.form.Panel' 
    ,xtype      : 'CodeList' 
    ,controller : 'CodeList' 
    ,viewModel  : 'CodeList'
    ,listeners  : { 
         resize : 'setGridHeight'
     }
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '코드 조회'
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
           {
               xtype : 'combo'
              ,name : 'searchCondition'
              ,width : 150     
              ,editable : false
              ,displayField : 'key'
              ,valueField : 'value'
              ,queryMode : 'local'
              ,bind : { value : '{searchKeyCombo}'}
              ,store : {
                   fields : ['key','value'] 
                  ,data : 
                   [
                     {key : '코드ID명'     , value : 'CD_ID_NM'    }
                    ,{key : '코드ID한글명' , value : 'CD_ID_HNM'   }
                    ,{key : '코드ID그룹명' , value : 'CD_ID_GRP_NM'}
                    ,{key : '코드'         , value : 'CD'          }
                    ,{key : '코드명'       , value : 'CD_NM'       }
                    ,{key : '코드한글명'   , value : 'CD_HNM'      }
                    ,{key : '코드설명'     , value : 'CD_DESC'     }
                   ]
               }
           }
          ,{
               xtype : 'textfield'
              ,name : 'searchValue'
              ,width : 200     
              ,emptyText : '검색어를 입력하세요'
              // ,value : 'aaaa'
              ,bind : { value : '{searchValue}' }
              ,enableKeyEvents: true
              ,listeners: {
                   specialkey: function(f,e,op) {
                       if (e.getKey() == e.ENTER) {
                       }
                   }
               }
           }
          ,{ xtype:'component' , anchor:'100%'
            ,html:[ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                   ,'상태'
                   ,'&nbsp;&nbsp;'
                  ]
           }
          ,{
              xtype : 'combo'
             ,width : 90     
             ,name : 'codeStatus'
             ,editable : false
             ,displayField : 'key'
             ,valueField : 'value'
             ,queryMode : 'local'
             ,bind : { value : '{cdStsCd}'}
             ,store : {
                  fields : ['key','value'] 
                 ,data : 
                  [
                    {key : '전체'     , value : '99'}
                   ,{key : '요청'     , value : '01'}
                   ,{key : '반려'     , value : '02'}
                   ,{key : '승인'     , value : '03'}
                   ,{key : '승인취소' , value : '04'}
                  ]
              }
          }
         ,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
         ,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
         ,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
         ,'->'
         ,{xtype:'button' , text:'신규' , handler:'initBtn', iconCls:'x-fa fa-gift'}
         ,{xtype:'button' , text:'저장' , handler:'saveBtn', iconCls:'x-fa fa-gift'}
         ,{xtype:'button' , text:'삭제' , handler:'delBtn', iconCls:'x-fa fa-gift'}
         ,{xtype:'button' , text:'엑셀' ,id : 'excelBtn', handler:'excelBtn' , iconCls:'x-fa fa-gift'}
         ,{xtype:'button' , text:'조회' ,id : 'selBtn', handler:'selBtn' , iconCls:'x-fa fa-gift'}

         ] 
      }
      
      //-------------------------------------------
      // grid
      //-------------------------------------------
      ,{
          xtype : 'grid'
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
             ,'cellediting'
          ]         
          //,plugins : {ptype:'cellediting',clicksToEdit:2}                
         ,viewConfig: {
             stripeRows: false
             //,enableTextSelection: true
             //,markDirty: false
          }
         ,columns :
          [
            {text:'코드그룹'     , dataIndex:'CD_ID_GRP_NM' , style:'text-align:center' , align:'center', width:100, editor:{xtype:'textfield'}}
           ,{text:'코드ID명'     , dataIndex:'CD_ID_NM'     , style:'text-align:center' , align:'center', width:90 , editor:{xtype:'textfield'}}
           ,{text:'코드ID한글명' , dataIndex:'CD_ID_HNM'    , style:'text-align:center' , align:'center', width:100, editor:{xtype:'textfield'}}
           ,{text:'코드'         , dataIndex:'CD'           , style:'text-align:center' , align:'center', width:60 , editor:{xtype:'textfield'}}
           ,{text:'코드명'       , dataIndex:'CD_NM'        , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
           ,{text:'코드한글명'   , dataIndex:'CD_HNM'       , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
           ,{text:'코드설명'     , dataIndex:'CD_DESC'      , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
           ,{text:'코드상태코드' , dataIndex:'CD_STS_CD'    , style:'text-align:center' , align:'left'  , editor:{xtype:'textfield'}}
           ,{text:'코드상태'     , dataIndex:'CD_STS_CD_NM' , style:'text-align:center' , align:'left'  , flex:1}
           ,{text:'등록일시'     , dataIndex:'REG_DTM'      , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'등록자'       , dataIndex:'REG_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경일시'     , dataIndex:'UPD_DTM'      , style:'text-align:center' , flex:1, hidden:true}
           ,{text:'변경자'       , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
          ]
         ,forceFit: true           
         ,bind:{store:'{CodeList}'}
    }
   ]
});