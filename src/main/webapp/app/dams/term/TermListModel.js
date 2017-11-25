Ext.define('fframe.dams.term.TermListModel', {
    extend: 'Ext.app.ViewModel'
   ,alias: 'viewmodel.termList'
   ,data : {
        CD_ID_NM   : 'TERM_SRCH_UCD'
       ,CD         : '02'
       ,CD_NM      : 'COL_HNM'
       ,CD_HNM     : ''
   }
   ,stores : {
        termList : {
            fields : [
                      'COL_NM'        
                     ,'COL_HNM'        
                     ,'COL_DESC'      
                     ,'COL_ABBR_HNM'     
                     ,'DATA_TYPE_DESC'   
                     ,'COL_STS_CD'      
                     ,'REG_DTM'
                     ,'REG_USR_ID'
                     ,'UPD_DTM'
                     ,'UPD_USR_ID'
                     ]
           ,proxy : {
                type : 'ajax'
               ,url : ''
               ,reader : {
                    type : 'json' 
                   ,rootProperty : 'data'
                   ,totalProperty : 'total'    
                }
            }
        }
    }
});
