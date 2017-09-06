/**
 * @fframe.title  : Register Template Program
 * @fframe.author : joseph.pi 
 */
Ext.define('fframe.tmpl.TmplPgmRegView', {
     extend      : 'Ext.form.Panel'
    ,xtype       : 'TmplPgmReg'
    ,controller  : 'TmplPgmReg'
    ,viewModel   : 'TmplPgmReg'    
    ,title       : '사용자 등록'
    ,titleAlign  : 'center' 
    ,buttonAlign : 'center'
    ,height      : 320
    ,bodyPadding : 20
    ,listeners : {
        boxready : 'initBtn'
     }
    ,items: 
     [ 
       {
          xtype      : 'textfield'
         ,width      : 400              
         ,emptyText  : '패키지명을 입력하세요'
         ,fieldLabel : '패키지명'
         ,name       : 'pkgNm'
       }
      ,{
          xtype      : 'textfield' 
         ,width      : 400              
         ,emptyText  : '프로그램명을 입력하세요'
         ,fieldLabel : '프로그램명'
         ,name       : 'pgmNm' 
       }
     ]
    ,buttons: 
     [
       {name:'saveBtn' , text:'생성'  , handler:'saveBtn'}
     ]
});