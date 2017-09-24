Ext.define('fframe.dams.code.CodeRegListView', {
     extend: 'Ext.form.Panel'
    ,xtype: 'codeRegList'
    ,controller: 'codeRegList'
    ,viewModel: 'codeRegList'
        ,listeners  : { 
            resize : 'setGridHeight'
        }
       //-------------------------------------------
       // titletoolbar
       //-------------------------------------------
       ,title : '코드 등록 조회'
       ,items :
        [
         //-------------------------------------------
         // 검색 레이어
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
            ,{xtype:'button' , text:'조회' ,id : 'selBtn', handler:'selBtn' , iconCls:'x-fa fa-gift'}
            
            ] 
         }
         //-------------------------------------------
         // 이벤트 버튼 레이어
         //-------------------------------------------
         ,{
            xtype : 'toolbar'
           ,height : 50
           ,items : 
            [ 
              '->'
            ,{xtype:'button' , text:'신규' , handler:'initBtn', iconCls:'x-fa fa-gift'}
            ,{xtype:'button' , text:'저장' , handler:'saveBtn', iconCls:'x-fa fa-gift'}
            ,{xtype:'button' , text:'삭제' , handler:'delBtn', iconCls:'x-fa fa-gift'}
            ,{xtype:'button' , text:'다운' ,id : 'excelDownBtn', handler:'excelDownBtn' , iconCls:'x-fa fa-gift'}
            ,{xtype:'filefield' 
             ,buttonText:'업로드'
             ,name:'uploadFile'
             ,buttonOnly:true
             ,allowBlank:false
             ,listeners:{
                   afterrender:function(fileObj){
                       //파일태그옵션에 multiple이라는 옵션을 정의
                        fileObj.fileInputEl.set({
                           multiple:'multiple'
                       });
                   }
                  ,change:function(btn){
                       //파일첨부를 다중으로 선택시 열시버튼 누르면
                       //change 이벤트를 발생시켜 폼 submit!
                      Ext.Msg.alert("알림","111");                      
                       var frm = this.up("form").getForm();
                       if(frm.isValid()) {
                           Ext.Msg.alert("알림","222");
                           frm.submit({
                               url: '/dams/code/uploadCodeRegList',
                               success : function(fp, res) {
                                   var result = Ext.decode(res.responseText);
                                   if(result['isSuccess']){
                                       Ext.toast({  html:result['msg'],title:'알림',width: 200,align:'t',timeout: 500});
                                   } else {
                                       Ext.Msg.alert("알림",result['errUsrMsg']);
                                       return;
                                   }
                                   //한번 submit 처리가 되면 filefield는 초기화 되므로
                                   //다시 filefield에 multiple 속성 설정
                                   this.up("form").down("filefield").fileInputEl.set({
                                       multiple:'multiple'
                                   });
                               }
                           });
                       }
                   }
              }
            }
            ] 
          }         
         //-------------------------------------------
         // grid
         //-------------------------------------------
         ,{
             xtype : 'grid'
            ,plugins : [{
                  ptype : 'gridexporter'
                }]              
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
               {text:'코드ID명'     , dataIndex:'CD_ID_NM'     , style:'text-align:center' , align:'center', width:90 , editor:{xtype:'textfield'}}
              ,{text:'코드ID한글명' , dataIndex:'CD_ID_HNM'    , style:'text-align:center' , align:'center', width:100, editor:{xtype:'textfield'}}
              ,{text:'코드그룹'     , dataIndex:'CD_ID_GRP_NM' , style:'text-align:center' , align:'center', width:100, editor:{xtype:'textfield'}}
              ,{text:'코드'         , dataIndex:'CD'           , style:'text-align:center' , align:'center', width:60 , editor:{xtype:'textfield'}}
              ,{text:'코드명'       , dataIndex:'CD_NM'        , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
              ,{text:'코드한글명'   , dataIndex:'CD_HNM'       , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
              ,{text:'코드설명'     , dataIndex:'CD_DESC'      , style:'text-align:center' , align:'left'  , flex:1   , editor:{xtype:'textfield'}}
              ,{text:'코드상태코드' , dataIndex:'CD_STS_CD'    , style:'text-align:center' , align:'left'  , editor:{xtype:'textfield'}}
              ,{text:'등록일시'     , dataIndex:'REG_DTM'      , style:'text-align:center' , flex:1}
              ,{text:'등록자'       , dataIndex:'REG_USR_ID'   , style:'text-align:center' , flex:1}
              ,{text:'변경일시'     , dataIndex:'UPD_DTM'      , style:'text-align:center' , flex:1}
              ,{text:'변경자'       , dataIndex:'UPD_USR_ID'   , style:'text-align:center' , flex:1}
             ]
            ,bind:{store:'{codeRegList}'}
       }
      ]
});