Ext.define('fframe.dams.table.CodeListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.CodeList'
    ,data : {
        searchKeyCombo : 'CD_ID_HNM'
       ,searchValue : ''
       ,cdStsCd : '99'    
     }
    ,stores : {
        CodeList : {
             fields : [
                        'CD_ID_GRP_NM'
                       ,'CD_ID_NM'    
                       ,'CD_ID_HNM'   
                       ,'CD'          
                       ,'CD_NM'       
                       ,'CD_HNM'      
                       ,'CD_DESC'     
                       ,'CD_STS_CD'   
                       ,'CD_STS_CD_NM'
                       ,'REG_DTM'     
                       ,'REG_USR_ID'  
                       ,'UPD_DTM'     
                       ,'UPD_USR_ID'  
                      ]
            ,proxy : {
                 type : 'ajax'
                ,url : '/dams/code/selectCodeList'
                ,reader : {
                     type : 'json'
                    ,rootProperty : 'data'
                    ,totalProperty : 'total'    
                }
            }
        }
     }
});
