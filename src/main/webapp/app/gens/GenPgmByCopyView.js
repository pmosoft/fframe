/*******************************************************************************
@title:코드생성 및 코드복사 
@description-start
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
Ext.define('fframe.gens.GenPgmByCopyView', {
     extend      : 'Ext.form.Panel'
    ,xtype       : 'genPgmByCopy'
    ,controller  : 'genPgmByCopy'
    ,viewModel   : 'genPgmByCopy'    
    ,title       : '복사로 프로그램 생성'
    ,titleAlign  : 'center' 
    ,buttonAlign : 'center'
    ,bodyPadding : 10
    ,defaults    : {anchor:'100%' , labelWidth:100}    
    ,listeners   : {}
    ,items:
     [ 
      //-------------------------------------------
      // toolbar
      //-------------------------------------------
       {
         xtype : 'fieldcontainer'
        ,layout: 'hbox'             
        ,height : 50
        ,items : 
         [
           {xtype:'displayfield' , value:'복사 패키지명  ', width:100}
          ,{xtype:'textfield'    , name:'srcPackNm' , bind:{value:'{srcPackNm}'} , width:250 , emptyText:'패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'}
          ,{xtype:'displayfield' , value:'  ' , width:20}
          ,{xtype:'displayfield' , value:'복사 프로그램명', width:120}
          ,{xtype:'textfield'    , name:'srcPgmNm' , bind:{value:'{srcPgmNm}'} , width:250 , emptyText:'프로그램명을 입력하세요(예:CodeList)'}
        ] 
       }      
      ,{
           xtype : 'fieldcontainer'
          ,layout: 'hbox'             
          ,height : 50
          ,items : 
           [
            ,{xtype:'displayfield' , value:'생성 패키지명  ' , width:100}
            ,{xtype:'textfield'    , name:'tarPackNm' , bind:{value:'{tarPackNm}'} , width:250 , emptyText:'패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'}
            ,{xtype:'displayfield' , value:'  ' , width:20}
            ,{xtype:'displayfield' , value:'생성 프로그램명', width:120}
            ,{xtype:'textfield'    , name:'tarPgmNm' , bind:{value:'{tarPgmNm}'} , width:250 , emptyText:'프로그램명을 입력하세요(예:CodeList)'}
          ] 
         }      
      
      ,{
          xtype : 'fieldcontainer'
         ,combineErrors: true
         ,msgTarget: 'side'
         ,fieldLabel: '프로그램생성'
         ,layout: 'hbox'
         ,defaults: {
              hideLabel: true
          }      
         ,items: [
              {xtype:'displayfield'  , value:'Front프로그램생성' , width:120}                  
             ,{xtype:'checkboxfield' , name:'isFrontExe' , bind:{value:'{isFrontExe}'}  , width:50}
             ,{xtype:'displayfield'  , value: 'Back프로그램생성' , width:120}                  
             ,{xtype:'checkboxfield' , name:'isBackExe'  , bind:{value:'{isBackExe}'} , width:50}
          ]   
      },{
          xtype      : 'textareafield'
         ,fieldLabel : '생성내역'             
         ,name       : 'genResult'
         ,height     : 400    
      }]
    ,buttons: [
               {name:'saveBtn' , text:'생성'  , handler:'saveBtn'}
             ]
    
});