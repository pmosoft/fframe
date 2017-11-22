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
Ext.define('fframe.etcl.SamfileLodView', {
    extend     : 'Ext.form.Panel'
   ,xtype      : 'samfileLod'
   ,controller : 'samfileLod'
   ,viewModel  : 'samfileLod'
   //,listeners  : { resize : 'setGridHeight', boxready:'comboLoad'}
   ,listeners  : { boxready:'comboLoad'}
   //-------------------------------------------
   // titletoolbar
   //-------------------------------------------
   ,title : 'CSV형태파일 로딩'
   ,layout: { type: 'hbox', align: 'stretch'}
   ,margin: '0 10 0 0'         
   ,items : 
    [
     //-------------------------------------------
     // 왼쪽 패널
     //-------------------------------------------
     {
         width:450
        ,margin: '0 10 0 0'         
        ,items : 
         [
             {xtype : 'fieldcontainer' , layout: 'hbox' , height : 10}    
            ,{
                 xtype : 'toolbar'
                ,height : 50
                ,items : 
                 [
                   {xtype:'component' , html:['&nbsp;','DB선택','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']}             
                  ,{xtype:'commCombo' , itemId:'DB_CONN_CD' , bind :{value:'{CD}'} , listeners:{select:'codeExt'}}
                 ]
             }
            ,{
                 xtype : 'toolbar'
                ,height : 50
                ,items : 
                 [
                   {xtype:'component' , html:['&nbsp;','DB설명','&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']}             
                  ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{dbInfo}'}}
                 ]
             }
            ,{
                 xtype : 'toolbar'
                ,height : 50
                ,items : 
                 [
                  ,{xtype:'component' , html:['&nbsp;','테이블검색','&nbsp;&nbsp;']}             
                  ,{xtype:'textfield' , name:'DB_INFO' , width:250, bind :{value:'{TAB_NM}'}
                      , emptyText:'검색어를 입력하세요' , enableKeyEvents: true 
                      ,listeners:{afterrender:function(field) {field.focus();} , specialkey: 'searchBtn'}
                   }
                  ,{xtype:'button' , text:'검색' , id:'selBtn', handler:'tabBtn' , iconCls:'x-fa fa-gift'}
                 ]
             }
            //-------------------------------------------
            // grid
            //-------------------------------------------
            ,{
                 xtype      : 'grid'
                ,margin     : '0 0 0 10'     
                ,height     : 650 , frame: true , columnLines : true
                ,viewConfig : {stripeRows:false}
                ,listeners : {
                    celldblclick : 'tabGrid'
                 }
                ,columns    : {
                    defaults: {style:'text-align:center' , align:'left'}             
                   ,items:   
                    [
                      {text:'소유자'         , dataIndex:'OWNER'    , width:100 , align:'center' }
                     ,{text:'테이블명'       , dataIndex:'TAB_NM'   , width:120      }
                     ,{text:'테이블한글명'   , dataIndex:'TAB_HNM'  , width:200      }
                    ]
                }
               ,bind:{store:'{samfileLod}'}
             }
         ]
      }
     //-------------------------------------------
     // 오른쪽 패널
     //-------------------------------------------
     ,{
          flex: 1
         ,margin: '0 10 0 0'         
         ,items :
          [
            {xtype: 'fieldset',
               title:'CSV형 샘파일 생성조건(셀값 선변경요건)',

               columnWidth: 0.35,
               margin: '0 0 0 10',
               layout: 'anchor',
               items: [{
                   margin: '0 0 10 0',
                   xtype: 'component',
                   html: [
                       '- 쉼표(,)를 @@@@로 변경<br>',
                       '- 싱클커테이션(\')을 (\'\')로 변경<br> ',
                       '- LF값을 ####으로 변경<br>',
                       '- 날짜값 변경(예: 2010-12-01 --> 20101201로 변경)<br>'
                   ]
               }]
            } 
            
           //-------------------------------------------
           // toolbar
           //-------------------------------------------
           ,{
                xtype : 'toolbar'
               ,height : 50
               ,items : 
                [
                  {xtype:'component' , html:['&nbsp;','샘파일 입력','&nbsp;&nbsp;']}
                 ,{xtype:'textfield' , name:'samFile' , width:450, bind :{value:'{samFile}'} , emptyText:'c:/csv/samfile.dat'}
                 ,{xtype:'button' , text:'샘파일샘플링출력' , id:'samSelBtn', handler:'samSelBtn' , iconCls:'x-fa fa-gift'}
                ]
            }

           ,{xtype: 'textarea',
               hideLabel: true,
               name: 'msg',
               width:700
               }
           ,{
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
               ,itemId     : 'tabGrid'
               ,height     : 450 , frame: true , columnLines : true
               ,viewConfig : {stripeRows:false} //,enableTextSelection: true,markDirty: false
            }
          ]
      }  
   ]
});


//* 엑셀파일 샘파일로 저장하여 로딩하는 경우
//* StringTokenizer는 ,, 일경우 무시되므로 spilt 기능으로 처리하고 컬럼구분자는 ,를 사용한다.
//* 
//* 1단계 : CSV구분자인 ","fmf "____"로 변경(컬럼글자수 초과를 야기할수 있다)
//* 2단계 : insert문장 "'"를 "''"로 변경
//* 3단계 : 셀내에 LF값을 "@@@@"로 변경(컬럼굴자수 초과를 야기할수 있다)
//* 4단계 : 기타 변경사항 적용(예: 2010-12-01 --> 20101201로 변경)
//* 
//* 5단계 : CSV로 저장한다
//* 6단계 : ETT 수행
//* 7단계 : update 테이블 "____","@@@@@"
//* 
//* 주의사항01 : 엑셀전체셀 복사시 셀내 탭문자를 선변경요. 셀가 있는 툴에 따라 내릴 경우 탭을 인식
//* 주의사항02 : 구분자 2개 이상인 경우
//*  - spilt이 아닌 StringTokenizer를 사용해야 한다
//*  - '#|#|'를 "#| #|"으로 변경해야 자바에서 token으로 인식한다
//*  - 마지막 필드에 더미로 값을 모두 넣어야 컬럼수가 동일하게 처리된다.
//* 
//* 오류유형01 : 컬럼갯수 상이
//* 오류유형02 : 컬럼글자수 초과
//* 오류유형03 : 중복오류            
