Ext.define('fframe.dams.pack.PackListView', {
     extend: 'Ext.form.Panel'
    ,xtype: 'packList'
    ,controller: 'packList'
    ,viewModel: 'packList'
    ,listeners : {
        resize : 'setGridHeight'
    }
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '패키지 조회'

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
                	 var userReg = Ext.create("fframe.dams.pack.PackRegView");
                     var viewModel = userReg.getViewModel();
        
                     var USE_YN = record.get("USE_YN");
                     (USE_YN="Y")?USE_YN=true:USE_YN=false;
        
                     viewModel.set("PKG_FUL_NM",record.get("PKG_FUL_NM"));
                     viewModel.set("PKG2_NM"   ,record.get("PKG2_NM"   ));
                     viewModel.set("PKG3_NM"   ,record.get("PKG3_NM"   ));
                     viewModel.set("PKG4_NM"   ,record.get("PKG4_NM"   ));
                     viewModel.set("PKG_HNM"   ,record.get("PKG_HNM"   ));
                     viewModel.set("PKG_DESC"  ,record.get("PKG_DESC"  ));
                     viewModel.set("USE_YN"    ,record.get("USE_YN"    ));
                     viewModel.set("REG_DT"    ,record.get("REG_DT"    ));
                     viewModel.set("REG_USR_ID",record.get("REG_USR_ID"));
                     viewModel.set("UPD_DT"    ,record.get("UPD_DT"    ));
                     viewModel.set("UPD_USR_ID",record.get("UPD_USR_ID"));
        
                     userReg.show();
                 }
                ,itemcontextmenu : function( obj, record, item, index, e, eOpts){
                    console.log(record.get("USER_NM"));
                 }
             }
            ,columns :
             [
              {xtype:'rownumberer'}
             ,{text:'패키지풀명'    , dataIndex:'PKG_FUL_NM' , style:'text-align:center' , flex:1}
             ,{text:'패키지2자리명' , dataIndex:'PKG2_NM'    , style:'text-align:center' , flex:1}
             ,{text:'패키지3자리명' , dataIndex:'PKG3_NM'    , style:'text-align:center' , flex:1}
             ,{text:'패키지4자리명' , dataIndex:'PKG4_NM'    , style:'text-align:center' , flex:1}
             ,{text:'패키지한글명'  , dataIndex:'PKG_HNM'    , style:'text-align:center' , flex:1}
             ,{text:'패키지설명'    , dataIndex:'PKG_DESC'   , style:'text-align:center' , flex:1}
             ,{text:'사용유무'      , dataIndex:'USE_YN'     , style:'text-align:center' , flex:1}
             ,{text:'등록일시'      , dataIndex:'REG_DTM'    , style:'text-align:center' , flex:1, hidden:true}
             ,{text:'등록자'        , dataIndex:'REG_USR_ID' , style:'text-align:center' , flex:1, hidden:true}
             ,{text:'변경일시'      , dataIndex:'UPD_DTM'    , style:'text-align:center' , flex:1, hidden:true}
             ,{text:'변경자'        , dataIndex:'UPD_USR_ID' , style:'text-align:center' , flex:1, hidden:true}
             ]
            ,bind:{store:'{PackList}'}
            ,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , display:true}
            // plugins : 'ux-slidingpager',
         }
     ]
});