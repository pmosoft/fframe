Ext.define('fframe.dams.table.ExtractTabColListView', {
     extend: 'Ext.form.Panel'
    ,xtype: 'ExtractTabColList'
    ,controller: 'ExtractTabColList'
    ,viewModel: 'ExtractTabColList'
    ,listeners : {
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
                   '->'
                  ,{xtype:'button' ,text:'추출' , handler:'extBtn'}
                  ,{xtype:'button' ,text:'비교' , handler:'cmpBtn'}
                  ,{xtype:'button' ,text:'반영' , handler:'insBtn'}
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
                     var userReg = Ext.create("fframe.dams.table.TabInfoRegView");
                     var viewModel = userReg.getViewModel();

                     var USE_YN = record.get("USE_YN");
                     (USE_YN="Y")?USE_YN=true:USE_YN=false;

                     viewModel.set("STS_NM"        ,record.get("STS_NM"        ));
                     viewModel.set("DB_NM"         ,record.get("DB_NM"         ));
                     viewModel.set("OWNER"         ,record.get("OWNER"         ));
                     viewModel.set("TAB_NM"        ,record.get("TAB_NM"        ));
                     viewModel.set("COL_NM"        ,record.get("COL_NM"        ));
                     viewModel.set("COL_HNM"       ,record.get("COL_HNM"       ));
                     viewModel.set("COL_DESC"      ,record.get("COL_DESC"      ));
                     viewModel.set("DATA_TYPE_NM"  ,record.get("DATA_TYPE_NM"  ));
                     viewModel.set("LEN"           ,record.get("LEN"           ));
                     viewModel.set("DECIMAL_CNT"   ,record.get("DECIMAL_CNT"   ));
                     viewModel.set("DATA_TYPE_DESC",record.get("DATA_TYPE_DESC"));
                     viewModel.set("REG_DTM"       ,record.get("REG_DTM"       ));
                     viewModel.set("REG_USR_ID"    ,record.get("REG_USR_ID"    ));
                     viewModel.set("UPD_DTM"       ,record.get("UPD_DTM"       ));
                     viewModel.set("UPD_USR_ID"    ,record.get("UPD_USR_ID"    ));

                     userReg.show();
                 }
                ,itemcontextmenu : function( obj, record, item, index, e, eOpts){
                    console.log(record.get("USER_NM"));
                 }
             }
            ,columns :
             [
              {xtype:'rownumberer'}
             ,{text:'상태'           , dataIndex:'STS_NM'          , style:'text-align:center' , flex:1}
             ,{text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , flex:1}
             ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , flex:1}
             ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , flex:1}
             ,{text:'컬럼명'         , dataIndex:'COL_NM'         , style:'text-align:center' , flex:1}
             ,{text:'컬럼한글명'     , dataIndex:'COL_HNM'        , style:'text-align:center' , flex:1}
             ,{text:'컬럼설명'       , dataIndex:'COL_DESC'       , style:'text-align:center' , flex:1}
             ,{text:'데이터타입명'   , dataIndex:'DATA_TYPE_NM'   , style:'text-align:center' , flex:1}
             ,{text:'길이'           , dataIndex:'LEN'            , style:'text-align:center' , flex:1}
             ,{text:'소수점수'       , dataIndex:'DECIMAL_CNT'    , style:'text-align:center' , flex:1}
             ,{text:'데이터타입설명' , dataIndex:'DATA_TYPE_DESC' , style:'text-align:center' , flex:1}
             ,{text:'등록일시'       , dataIndex:'REG_DTM'        , style:'text-align:center' , flex:1}
             ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , style:'text-align:center' , flex:1}
             ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , style:'text-align:center' , flex:1}
             ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , style:'text-align:center' , flex:1}
             ]
            ,bind:{store:'{TabInfoList}'}
            ,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , displayInfo:true}
            // plugins : 'ux-slidingpager',
         }
     ]
});
