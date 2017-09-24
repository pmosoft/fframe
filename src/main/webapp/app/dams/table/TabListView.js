Ext.define('fframe.dams.table.TabListView', {
     extend: 'Ext.form.Panel'
    ,xtype: 'TabList'
    ,controller: 'TabList'
    ,viewModel: 'TabList'
    ,listeners : {
        resize : 'setGridHeight'
    }
    //-------------------------------------------
    // titletoolbar
    //-------------------------------------------
    ,title : '테이블 조회'

    ,items :
     [
         //-------------------------------------------
         // toolbar
         //-------------------------------------------
         {
              xtype : 'toolbar'
             ,items :
              [
               ,{
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
                       ]
                   }
                }              
               ,{xtype:'textfield' , name:'searchValue' , emptyText:'검색어를 입력하세요' , bind:{value:'{searchValue}'}}
               ,'->'
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
                	 var userReg = Ext.create("fframe.dams.table.TabRegView");
                     var viewModel = userReg.getViewModel();

                     var USE_YN = record.get("USE_YN");
                     (USE_YN="Y")?USE_YN=true:USE_YN=false;

                     viewModel.set("DB_NM"         ,record.get("DB_NM"         ));
                     viewModel.set("OWNER"         ,record.get("OWNER"         ));
                     viewModel.set("TAB_NM"        ,record.get("TAB_NM"        ));
                     viewModel.set("TAB_HNM"       ,record.get("TAB_HNM"       ));
                     viewModel.set("TAB_DESC"      ,record.get("TAB_DESC"      ));
                     viewModel.set("REG_DTM"       ,record.get("REG_DTM"       ));
                     viewModel.set("REG_USR_ID"    ,record.get("REG_USR_ID"    ));
                     viewModel.set("UPD_DTM"       ,record.get("UPD_DTM"       ));
                     viewModel.set("UPD_USR_ID"    ,record.get("UPD_USR_ID"    ));
                 }
             }
            ,columns :
             [
              {xtype:'rownumberer'}
             ,{text:'DB명'           , dataIndex:'DB_NM'          , style:'text-align:center' , flex:1}
             ,{text:'소유자'         , dataIndex:'OWNER'          , style:'text-align:center' , flex:1}
             ,{text:'테이블명'       , dataIndex:'TAB_NM'         , style:'text-align:center' , flex:1}
             ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'        , style:'text-align:center' , flex:1}
             ,{text:'테이블설명'     , dataIndex:'TABL_DESC'       , style:'text-align:center' , flex:1}
             ,{text:'등록일시'       , dataIndex:'REG_DTM'        , style:'text-align:center' , flex:1}
             ,{text:'등록자'         , dataIndex:'REG_USR_ID'     , style:'text-align:center' , flex:1}
             ,{text:'변경일시'       , dataIndex:'UPD_DTM'        , style:'text-align:center' , flex:1}
             ,{text:'변경자'         , dataIndex:'UPD_USR_ID'     , style:'text-align:center' , flex:1}
             ]
            ,bind:{store:'{TabList}'}
            ,bbar:{xtype:'pagingtoolbar' , plugins:'ux-progressbarpager' , display:true}
            // plugins : 'ux-slidingpager',
         }
     ]
});