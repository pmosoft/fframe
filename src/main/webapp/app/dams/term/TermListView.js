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

    ,fieldDefaults : {
         labelWidth : 110
        ,anchor : '100%'
     }        
        
        
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
            ,html:[ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                   ,'상태'
                   ,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
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
            ,height : 150
            ,border : true
            ,columnLines : true
            ,listeners : {
                 celldblclick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts){
                	 var userReg = Ext.create("fframe.dams.term.TermRegView");
                     var viewModel = userReg.getViewModel();
        
                     viewModel.set("COL_NM"       ,record.get("COL_NM"     ));
                     viewModel.set("COL_HNM"      ,record.get("COL_HNM"    ));
                     viewModel.set("COL_DESC"     ,record.get("COL_DESC"   ));
                     viewModel.set("COL_ABBR_HNM" ,record.get("COL_ABBR_HNM"   ));
                     viewModel.set("DATA_TYPE_DESC" ,record.get("DATA_TYPE_DESC"   ));
                     viewModel.set("COL_STS_CD"   ,record.get("COL_STS_CD"    ));
                     viewModel.set("COL_STS_NM"   ,record.get("COL_STS_NM"    ));
                     viewModel.set("REG_DT"       ,record.get("REG_DT"    ));
                     viewModel.set("REG_USR_ID"   ,record.get("REG_USR_ID"));
                     viewModel.set("UPD_DT"       ,record.get("UPD_DT"    ));
                     viewModel.set("UPD_USR_ID"   ,record.get("UPD_USR_ID"));
                     userReg.show();
                 }
             }
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
            ,bind:{store:'{TermList}'}
            ,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , display:true}
            // plugins : 'ux-slidingpager',
         }
     ]
});