Ext.define('fframe.dams.pack.PackInfoListStore', {
     extend: 'Ext.data.BufferedStore'
    ,alias: 'store.PackInfoList'
    ,storedId : 'PackInfoList'
    ,autoLoad : false   
    ,fields : ['PKG_FUL_NM','PKG2_NM','PKG3_NM','PKG4_NM','PKG_HNM','PKG_DESC','USE_YN','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
	,proxy : {
		 type : 'ajax'    			
		,url : '/dams/pack/selectPackInfoList'
		,reader : {
			 type : 'json'
			,rootProperty : 'data'	
		}
	} 
});
