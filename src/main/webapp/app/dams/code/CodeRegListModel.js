Ext.define('fframe.dams.code.CodeRegListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.codeRegList'
        ,data : {
            searchKeyCombo : 'CD_ID_HNM'
           ,searchValue : ''
           ,cdStsCd : '99'    
         }
        ,stores : {
            codeRegList : {
                 fields : [
                            'CD_ID_NM'    
                           ,'CD_ID_HNM'   
                           ,'CD_ID_GRP_NM'
                           ,'CD'          
                           ,'CD_NM'       
                           ,'CD_HNM'      
                           ,'CD_DESC'     
                           ,'CD_STS_CD'   
                           ,'REG_DTM'     
                           ,'REG_USR_ID'  
                           ,'UPD_DTM'     
                           ,'UPD_USR_ID'
                          ]
                ,proxy : {
                     type : 'ajax'
                    ,url : '/dams/code/selectCodeRegList'
                    ,reader : {
                         type : 'json'
                        ,rootProperty : 'data'
                        ,totalProperty : 'total'    
                    }
                }
            }
         }
    });
