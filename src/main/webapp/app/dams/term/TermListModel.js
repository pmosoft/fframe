Ext.define('fframe.dams.term.TermListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TermList'
    ,data : {
         searchKeyCombo : 'COL_HNM'
        ,searchValue : ''
        ,termStsCd : '99'
     }
    ,stores : {
        TermList : {
             fields : ['COL_NM'
                       ,'COL_HNM'
                       ,'COL_DESC'
                       ,'COL_ABBR_HNM'
                       ,'INFO_TYPE_NM'
                       ,'COL_STS_CD'
                       ,'COL_STS_NM'
                       ,'REG_DTM'
                       ,'REG_USR_ID'
                       ,'UPD_DTM'
                       ,'UPD_USR_ID'
                       ]
             ,proxy : {
                  type : 'ajax'              
                 ,url : '/dams/term/selectExtTermList'
                 ,reader : {
                      type : 'json'
                     ,rootProperty : 'data'  
                 }
             } 
        }
     } 
});

