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

    ,items :
     [
         //-------------------------------------------
         // toolbar
         //-------------------------------------------
         {
              xtype : 'toolbar'
             ,items :
              [
                   {xtype:'textfield' , name:'searchValue' , emptyText:'검색어를 입력하세요' , bind:{value:'{searchValue}'}}
                  ,'->'
                  ,{xtype:'button' ,text:'신규' , handler:'insBtn'}
                  ,{xtype:'button' ,text:'삭제' , handler:'delBtn'}
                  ,{xtype:'button' ,text:'조회' , handler:'selBtn'}
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
        
                     var USE_YN = record.get("USE_YN");
                     (USE_YN="Y")?USE_YN=true:USE_YN=false;
        
                     viewModel.set("COL_NM"       ,record.get("COL_NM"     ));
                     viewModel.set("COL_HNM"      ,record.get("COL_HNM"    ));
                     viewModel.set("COL_DESC"     ,record.get("COL_DESC"   ));
                     viewModel.set("COL_ABBR_HNM" ,record.get("COL_ABBR_HNM"   ));
                     viewModel.set("INFO_TYPE_NM" ,record.get("INFO_TYPE_NM"   ));
                     viewModel.set("USE_YN"       ,record.get("USE_YN"    ));
                     viewModel.set("REG_DT"       ,record.get("REG_DT"    ));
                     viewModel.set("REG_USR_ID"   ,record.get("REG_USR_ID"));
                     viewModel.set("UPD_DT"       ,record.get("UPD_DT"    ));
                     viewModel.set("UPD_USR_ID"   ,record.get("UPD_USR_ID"));
        
                     userReg.show();
                 }
                ,itemcontextmenu : function( obj, record, item, index, e, eOpts){
                    console.log(record.get("USER_NM"));
                 }
             }
            ,columns :
             [
              {xtype:'rownumberer'}
             ,{text:'컬럼명'        , dataIndex:'COL_NM'      , style:'text-align:center' , flex:1}
             ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'      , style:'text-align:center' , flex:1}
             ,{text:'컬럼설명'      , dataIndex:'COL_DESC'     , style:'text-align:center' , flex:1}
             ,{text:'컬럼약어한글명'  , dataIndex:'COL_ABBR_HNM' , style:'text-align:center' , flex:1}
             ,{text:'인포타입명'     , dataIndex:'INFO_TYPE_NM' , style:'text-align:center' , flex:1}
             ,{text:'사용여부'      , dataIndex:'USE_YN'       , style:'text-align:center' , flex:1}
             ,{text:'등록일시'      , dataIndex:'REG_DTM'    , style:'text-align:center' , flex:1}
             ,{text:'등록자'       , dataIndex:'REG_USR_ID' , style:'text-align:center' , flex:1}
             ,{text:'변경일시'      , dataIndex:'UPD_DTM'    , style:'text-align:center' , flex:1}
             ,{text:'변경자'       , dataIndex:'UPD_USR_ID' , style:'text-align:center' , flex:1}
             ]
            ,bind:{store:'{TermList}'}
            ,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , displayInfo:true}
            // plugins : 'ux-slidingpager',
         }
     ]
});