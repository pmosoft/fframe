/**
 * @fframe.title  : Register Template Program
 * @fframe.author : joseph.pi 
 */
Ext.define('fframe.gens.core.TmplPgmRegView', {
     extend      : 'Ext.form.Panel'
    ,xtype       : 'TmplPgmReg'
    ,controller  : 'TmplPgmReg'
    ,viewModel   : 'TmplPgmReg'    
    ,title       : '템플릿 프로그램 생성'
    ,titleAlign  : 'center' 
    ,buttonAlign : 'center'
    ,bodyPadding : 10
    ,defaults    : {
         anchor     : '100%'
        ,labelWidth : 100
     }    
    ,listeners   : {
     }
    
    ,items:[{
          xtype      : 'textfield'
         ,emptyText  : '패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'
         ,fieldLabel : '패키지명'
         ,name       : 'packNm'
         ,bind       : {value:'{packNm}'}
      },{
          xtype      : 'textfield' 
         ,emptyText  : '프로그램명을 입력하세요(예:CodeList)'
         ,fieldLabel : '프로그램명'
         ,name       : 'pgmNm'
         ,bind       : {value:'{pgmNm}'}             
      },{
          xtype : 'fieldcontainer'
         ,combineErrors: true
         ,msgTarget: 'side'
         ,fieldLabel: '템플릿'
         ,layout: 'hbox'
         ,defaults: {
              hideLabel: true
          }      
         ,items: [
              {xtype:'displayfield' , value:'유형' , width:40}                  
             ,{
                xtype      : 'combo'
               ,name       : 'tmplTypeCombo'
               ,fieldLabel : '유형'
               ,width      : 150    
               ,editable   : false
               ,displayField : 'key'
               ,valueField : 'value'
               ,queryMode : 'local'
               ,bind : { value:'{tmplCd}' }
               ,store : {
                    fields : ['key','value'] 
                   ,data : [
                      {key:'그리드01' , value:'grid01'}
                     ,{key:'그리드02' , value:'grid02'}
                    ]
                }
              }
             ,{xtype:'displayfield'  , value:'미리보기' , width:120}
             //,{bbar:[{name:'saveBtn' , text:'생성'  , handler:'saveBtn'}]}
             
          ]    
      },{
          xtype : 'fieldcontainer'
         ,combineErrors: true
         ,msgTarget: 'side'
         ,fieldLabel: '프로그램복사'
         ,layout: 'hbox'
         ,defaults: {
              hideLabel: true
          }      
         ,items: [
              {xtype:'displayfield' , value:'패키지명  ' , width:60}
             ,{xtype:'textfield'    , name:'packSrcNm' , bind:{value:'{packNm}'} , width:250 , emptyText:'패키지명을 입력하세요(예:net.pmosoft.fframe.dams.code)'}
             ,{xtype:'displayfield' , value:'  ' , width:20}
             ,{xtype:'displayfield' , value:'프로그램명', width:70}
             ,{xtype:'textfield'    , name:'pgmSrcNm' , bind:{value:'{pgmNm}'} , width:250 , emptyText:'프로그램명을 입력하세요(예:CodeList)'}
          ]    
      },{
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
         ,height     : 200    
      }]
    ,buttons: [
               {name:'saveBtn' , text:'생성'  , handler:'saveBtn'}
              ,{name:'copyBtn' , text:'복사'  , handler:'copyBtn'}
             ]
    
});