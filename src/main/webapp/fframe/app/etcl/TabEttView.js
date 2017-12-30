/*******************************************************************************
@title:메타 테이블 정보 추출 
@description-start
 1. 메타테이블 정보 추출
   - 콤보박스에서 DB선택하면 DB접속정보를 코드 및 코드확장에서 가져온다
   - 추출버튼 클릭하면 그리드에 출력
 2. 비교기능
   - 추출된 테이블 정보와 현재 저장된 테이블 정보를 비교하여 변경내용을 표시
 3. 테이블정보삭제
   - 저장된 테이블 정보를 삭제한다
 4. 테이블정보 반영
   - 신규 및 변경 메타테이블정보를 저장한다
@description-end  
@developer:피승현
@progress-rate:100%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.10.01|피승현|최초개발
|2017.10.10|피승현|주석정비
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/
Ext.define('fframe.app.etcl.TabEttView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'tabEtt'
   ,controller : 'tabEtt'
   ,viewModel  : 'tabEtt'
   //,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
   ,listeners  : { boxready:'comboLoad'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : '1단계 : 소스-타겟 테이블 검색 패널'
   //,layout: { type: 'vbox', align: 'stretch'}
   //,margin: '0 10 0 0'         
   ,items : 
    [
     //-------------------------------------------
     // 1단계 : 소스-타겟 테이블 검색 패널
     //-------------------------------------------
     {
          flex: 1     
         ,margin: '0 10 0 0'              
         ,layout: { type: 'hbox', align: 'stretch'}         
         ,items :     
          [
           //-------------------------------------------
           // 1-1단계 : 소스 테이블 검색 패널
           //-------------------------------------------
           {
               flex: 1     
              ,margin: '0 10 0 0'              
              ,items :     
               [     
                //-------------------------------------------     
                // toolbar     
                //-------------------------------------------     
                {     
                    xtype : 'toolbar'     
                   //,height : 50     
                   ,layout: { type: 'vbox', align: 'stretch'}
                   ,items :      
                    [     
                      {
                          xtype : 'toolbar'     
                         //,height : 50     
                         ,items :      
                          [     
                             {xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                            ,{xtype:'commCombo' , itemId:'SRC_DB_CONN_CD' , flex : 1, bind :{value:'{srcDbConn_CD}'} , listeners:{select:'srcDbConnComboChg'}}
                            ,{xtype:'component' , html:['&nbsp;&nbsp;&nbsp;','DB설명','&nbsp;']}
                            ,{xtype:'textfield' , name:'srcDbInfo' , flex : 1, bind :{value:'{srcDbInfo}'}}
                          ]  
                      }
                     ,{
                          xtype : 'toolbar'     
                         //,height : 50     
                         ,items :      
                          [     
                              {xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;']}             
                             ,{xtype:'textfield' , name:'srcTabNm' , flex : 1, bind :{value:'{srcTabNm}'}
                                  , emptyText:'테이블한글명을 입력하세요' , enableKeyEvents: true 
                                  ,listeners:{afterrender:function(field) {field.focus();} , specialkey: 'srcTabListGridBtn'}
                              }                                             
                             ,{xtype:'button' , text:'검색' , id:'srcTabListGridBtn', handler:'srcTabListGridBtn' , iconCls:'x-fa fa-gift'}
                          ]  
                      }             
                      
                    ]     
                }     
                //-------------------------------------------     
                // grid     
                //-------------------------------------------     
                ,{     
                     xtype      : 'grid'     
                    ,itemId     : 'srcTabListGrid'     
                    ,height     : 250 , frame: true , columnLines : true     
                    ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
                    ,listeners : {
                        celldblclick : 'tabGrid'
                     }
                    ,columns    : {
                        defaults: {style:'text-align:center' , align:'center'}             
                       ,items:   
                        [
                          {text:'SRC소유자'         , dataIndex:'OWNER'    , width:100  }
                         ,{text:'SRC테이블명'       , dataIndex:'TAB_NM'   , width:120      }
                         ,{text:'SRC테이블한글명'   , dataIndex:'TAB_HNM'  , flex : 1  , align:'left'  }
                        ]
                     }
                    ,bind:{store:'{srcTabList}'}     

                 }     
                ]     
           }
           //-------------------------------------------
           // 1-2단계 : 소스 테이블 검색 패널          
           //-------------------------------------------          
          ,{          
               flex: 1               
              ,margin: '0 10 0 0'                        
              ,items :     
              [     
               //-------------------------------------------     
               // toolbar     
               //-------------------------------------------     
                {     
                   xtype : 'toolbar'     
                  //,height : 50     
                  ,layout: { type: 'vbox', align: 'stretch'}
                  ,items :      
                   [     
                     {
                         xtype : 'toolbar'     
                        //,height : 50     
                        ,items :      
                         [     
                            {xtype:'component' , html:['&nbsp;','DB','&nbsp;']}             
                           ,{xtype:'commCombo' , itemId:'TAR_DB_CONN_CD' , flex : 1, bind :{value:'{tarDbConn_CD}'} , listeners:{select:'tarDbConnComboChg'}}
                           ,{xtype:'component' , html:['&nbsp;&nbsp;&nbsp;','DB설명','&nbsp;']}
                           ,{xtype:'textfield' , name:'tarDbInfo' , flex : 1, bind :{value:'{tarDbInfo}'}}
                         ]  
                     }
                    ,{
                         xtype : 'toolbar'     
                        //,height : 50     
                        ,items :      
                         [     
                             {xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;']}             
                            ,{xtype:'textfield' , name:'tarTabNm' , flex : 1, bind :{value:'{tarTabNm}'}
                                 , emptyText:'테이블한글명을 입력하세요' , enableKeyEvents: true 
                                 ,listeners:{afterrender:function(field) {field.focus();} , specialkey: 'tarTabListGridBtn'}
                             }                                             
                            ,{xtype:'button' , text:'검색' , id:'tarTabListGridBtn', handler:'tarTabListGridBtn' , iconCls:'x-fa fa-gift'}
                         ]  
                     }             
                     
                   ]     
               }     
               //-------------------------------------------     
               // grid     
               //-------------------------------------------     
               ,{     
                    xtype      : 'grid'     
                   ,itemId     : 'tarTabListGrid'     
                   ,height     : 250 , frame: true , columnLines : true     
                   ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
                   ,listeners : {
                       celldblclick : 'tabGrid'
                    }
                   ,columns    : {
                       defaults: {style:'text-align:center' , align:'center'}             
                      ,items:   
                       [
                         {text:'TAR소유자'         , dataIndex:'OWNER'    , width:100  }
                        ,{text:'TAR테이블명'       , dataIndex:'TAB_NM'   , width:120      }
                        ,{text:'TAR테이블한글명'   , dataIndex:'TAB_HNM'  , flex : 1  , align:'left'  }
                       ]
                    }
                  ,bind:{store:'{tarTabList}'}     

                }     
              ]  
           }          
          ]     
      }
     //-------------------------------------------
     // 아래쪽 패널
     //-------------------------------------------
     ,{
          flex: 1
         ,margin: '0 10 0 0'         
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
                 {xtype:'button' , text:'정합성체크' , id:'samChkBtn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
                ,{xtype:'button' , text:'테이블샘플반영' , id:'samChk2Btn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
                ,{xtype:'button' , text:'테이블샘플추출' , id:'samChk21Btn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
                ,{xtype:'component' , html:['&nbsp;','컬럼갯수','&nbsp;&nbsp;']}
                ,{xtype:'textfield' , name:'colCnt' , width:50, bind :{value:'{colCnt}'}}
                ,{xtype:'component' , html:['&nbsp;','구분자갯수','&nbsp;&nbsp;']}
                ,{xtype:'textfield' , name:'delimeterCnt' , width:50, bind :{value:'{delimeterCnt}'}}
                ,'->'
                ,{xtype:'button' , text:'로딩' , id:'samChk3Btn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
                ,{xtype:'button' , text:'로딩후샘플링조회' , id:'samChk4Btn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
               ]
           }
           //-------------------------------------------
           // grid
           //-------------------------------------------
           ,{
                xtype      : 'grid'
               ,itemId     : 'tabGrid2'
               ,height     : 250 , frame: true , columnLines : true
               ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
               ,bind:{store:'{tabEtt}'}
           
            }
          ]
      }  
   ]
});
