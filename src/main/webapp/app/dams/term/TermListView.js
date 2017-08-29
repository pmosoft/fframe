Ext.define('fframe.dams.term.TermListView', {
     extend: 'Ext.form.Panel'
    ,xtype: 'TermList'
    ,controller: 'TermList'
    ,viewModel: 'TermList'
    ,listeners : {
        resize : 'setGridHeight'
    }
    //-------------------------------------------
    // title
    //-------------------------------------------
    ,title : '표준용어 조회'
        
    ,tools: [{
        type: 'refresh'
       ,handler: 'onRefresh'
       ,tooltip: 'Reload Data'
     }]         
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
              ,editable : false
              ,displayField : 'key'
              ,valueField : 'value'
              ,queryMode : 'local'
              // value : 'USR_NM'
              ,bind : { value : '{searchKeyCombo}'}
              ,store : {
                   fields : ['key','value'] 
                  ,data : 
                   [
                     {key : '컬럼한글명' , value : 'COL_HNM'}
                    ,{key : '컬럼명'     , value : 'COL_NM'}
                   ]
               }
           }
          ,{
               xtype : 'textfield'
              ,name : 'searchValue'
              ,emptyText : '검색어를 입력하세요'
              // ,value : 'aaaa'
              ,bind : { value : '{searchValue}' }
              ,listeners: {
                   specialkey: function(f,e) {
                       if (e.getKey() == e.ENTER) {
                       //this.getController('Usr.UsrListController').selBtn(e);
                       //fframe.app.getController('view.syst.Usr.UsrListController').selBtn(this);
                       //var ctrl = new fframe.syst.usr.UsrListController();
                       //controller.selBtn();

                       //f.up('form').getForm().submit();
                       //var selBtn = f.up('toolbar').down('button#selBtn');
                       //selBtn.fireEvent('click', selBtn, event, options);
                           
                       }
                   }
               }
           }
          ,{ xtype:'component' , anchor:'100%'
            //,html:['&nbsp;&nbsp;상태&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']
            ,html:[ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                   ,'상태'
                   ,'&nbsp;&nbsp;'
                  ]
           }
          ,{
              xtype : 'combo'
             //,fieldLabel:'상태'
             //,anchor: '-150'                 
             ,name : 'termStatus'
             ,editable : false
             ,displayField : 'key'
             ,valueField : 'value'
             ,queryMode : 'local'
             ,bind : { value : '{termStsCd}'}
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
         ,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:true}
         ,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
         ,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:true}          
         ,'->'
         ,{xtype:'button' , text:'추출' , handler:'extBtn'}
         ,{xtype:'button' , text:'비교' , handler:'insBtn'}
         ,{xtype:'button' , text:'반영' , handler:'insBtn'}
         ,{xtype:'button' , text:'신규' , handler:'insBtn'}
         ,{xtype:'button' , text:'삭제' , handler:'delBtn'}
         ,{xtype:'button' , text:'조회' , handler:'selBtn'}
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
         //,border : true
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
         ,columns :
          [
           {xtype:'rownumberer'}
          ,{text:'컬럼명'         , dataIndex:'COL_NM'       , style:'text-align:center' , flex:1, align:'left'}
          ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'      , style:'text-align:center' , flex:1, align:'left'}
          ,{text:'컬럼설명'       , dataIndex:'COL_DESC'     , style:'text-align:center' , flex:1, align:'left'}
          ,{text:'컬럼약어한글명' , dataIndex:'COL_ABBR_HNM' , style:'text-align:center' , flex:1, align:'left'}
          ,{text:'데이터타입'     , dataIndex:'DATA_TYPE_DESC' , style:'text-align:center' , flex:1, align:'left'}
          ,{text:'컬럼상태코드'   , dataIndex:'COL_STS_CD'   , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'컬럼상태명'     , dataIndex:'COL_STS_NM'   , style:'text-align:center' , flex:1, align:'center'}
          ,{text:'등록일시'       , dataIndex:'REG_DTM'      , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'등록자'         , dataIndex:'REG_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경일시'       , dataIndex:'UPD_DTM'      , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경자'         , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , flex:1, hidden:true}
          ]
         ,forceFit: true           
         ,viewConfig: {
             columnLines: true,
             trackOver: false
          }            
         ,bind:{store:'{TermList}'}
         //,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , display:true}
         // plugins : 'ux-slidingpager',
      }
     ]
});