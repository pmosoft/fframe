Ext.define('fframe.dams.table.TabColListView', {
     extend : 'Ext.form.Panel' , xtype : 'TabColList' 
    ,controller : 'TabColList' , viewModel:'TabColList'
    ,listeners : { 
        resize : 'setGridHeight'
     }
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
           {
               xtype : 'combo'
              ,name : 'searchCondition'
              ,width : 120     
              ,editable : false
              ,displayField : 'key'
              ,valueField : 'value'
              ,queryMode : 'local'
              ,bind : { value : '{searchKeyCombo}'}
              ,store : {
                   fields : ['key','value'] 
                  ,data : 
                   [
                     {key : '테이블한글명', value : 'TAB_HNM'}
                    ,{key : '테이블명'    , value : 'TAB_NM'}
                    ,{key : '컬럼한글명'  , value : 'COL_HNM'}
                    ,{key : '컬럼명'      , value : 'COL_NM'}
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
                           //Ext.Msg.alert("알림","222");
                          // this.up('toolbar').down('button').handler
                         //  var selBtn = field.up('researchLinkForm').down('button#save');
                           
                           //var ctrl = this.getController();
                           //ctrl.selBtn(this);
                       //fframe.app.getController('view.syst.Usr.UsrListController').selBtn(this);
                       //var ctrl = new fframe.syst.usr.UsrListController();
                       //controller.selBtn();
                       //var ControllerRef  =   this.getController('fframe.dams.table.TabColListController');
                       //ControllerRef.selBtn(this);
                           
                       var button = Ext.getCmp('selBtn'); 
                       button.fireEvent('click', button,e,op);
                           
                       //f.up('form').getForm().submit();
                       var selBtn = f.up('toolbar').down('button#selBtn');
                       //field.up('form').getForm().submit(); 
                       selBtn.fireEvent('selBtn', selBtn, e,op);
                           
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
             ,width : 90     
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
         ,{text:'Rows'    , enableToggle:true , toggleHandler:'toggleRowSelect'    , pressed:false}
         ,{text:'Cells'   , enableToggle:true , toggleHandler:'toggleCellSelect'   , pressed:true}
         ,{text:'Columns' , enableToggle:true , toggleHandler:'toggleColumnSelect' , pressed:false}          
         ,'->'
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
          ]         
          //,plugins : {ptype:'cellediting',clicksToEdit:2}                
         ,viewConfig: {
             stripeRows: false
             //,enableTextSelection: true
             //,markDirty: false
          }
         ,columns :
          [
           {xtype:'rownumberer'}
          ,{text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , align:'center', width:90}
          ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , align:'center', width:100}
          ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , align:'center', width:120}
          ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'        , style:'text-align:center' , align:'left'  , width:150}
          ,{text:'ID'             , dataIndex:'COL_ID'         , style:'text-align:center' , align:'center', width:60}
          ,{text:'컬럼명'         , dataIndex:'COL_NM'         , style:'text-align:center' , align:'left'  , flex:1}
          ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'        , style:'text-align:center' , align:'left'  , flex:1}
          ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC' , style:'text-align:center' , align:'left'  , flex:1}
          ,{text:'컬럼설명'       , dataIndex:'COL_DESC'       , style:'text-align:center' , align:'left'  , flex:1}
          ,{text:'데이터타입명'   , dataIndex:'DATA_TYPE_NM'   , style:'text-align:center' , align:'left'  , flex:1, hidden:true}
          ,{text:'길이'           , dataIndex:'LEN'            , style:'text-align:center' , align:'left'  , flex:1, hidden:true}
          ,{text:'소수점수'       , dataIndex:'DECIMAL_CNT'    , style:'text-align:center' , align:'left'  , flex:1, hidden:true}
          ,{text:'등록일시'       , dataIndex:'REG_DTM'        , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , style:'text-align:center' , flex:1, hidden:true}
          ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , style:'text-align:center' , flex:1, hidden:true}
          ]
         ,forceFit: true           
         ,bind:{store:'{TabColList}'}
        //,bbar : {
        //     xtype : 'pagingtoolbar'
        //    ,plugins : 'ux-progressbarpager'
        //    //,plugins : 'ux-slidingpager',
        //    ,display : true
        // }
    }
     ]
});