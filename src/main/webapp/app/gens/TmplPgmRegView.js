/**
 * @fframe.title  : Register Template Program
 * @fframe.author : joseph.pi 
 */
Ext.define('fframe.gens.TmplPgmRegView', {
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
         ,emptyText  : '패키지명을 입력하세요'
         ,fieldLabel : '패키지명'
         ,name       : 'pkgNm'
      },{
          xtype      : 'textfield' 
         ,emptyText  : '프로그램명을 입력하세요'
         ,fieldLabel : '프로그램명'
         ,name       : 'pgmNm' 
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
               ,bind : { value:'{tmplTypeCombo}' }
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
         ,fieldLabel: '프로그램생성'
         ,layout: 'hbox'
         ,defaults: {
              hideLabel: true
          }      
         ,items: [
              {xtype:'displayfield'  , value:'Front프로그램생성' , width:120}                  
             ,{xtype:'checkboxfield' , name:'uiPgmYn'  , bind:{value:'{uiPgmYn}'}  , width:50}
             ,{xtype:'displayfield'  , value: 'Back프로그램생성' , width:120}                  
             ,{xtype:'checkboxfield' , name:'uiPgmYn2' , bind:{value:'{uiPgmYn2}'} , width:50}
          ]   
      },{
          xtype      : 'textareafield'
         ,fieldLabel : '생성내역'             
         ,name       : 'genResult'
         ,height     : 200    
      }]
    ,buttons: [
       {name:'saveBtn' , text:'생성'  , handler:'saveBtn'}
     ]
    
});