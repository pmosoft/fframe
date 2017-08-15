Ext.define('fframe.dams.table.TabInfoListStore', {
     extend: 'Ext.data.BufferedStore'
    ,alias: 'store.TabInfoList'
    ,storedId : 'TabInfoList'
    ,autoLoad : false
    ,fields : ['PKG_FUL_NM','PKG2_NM','PKG3_NM','PKG4_NM','PKG_HNM','PKG_DESC','USE_YN','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
	,proxy : {
		 type : 'ajax'
		,url : '/dams/pack/selectTabInfoList'
		,reader : {
			 type : 'json'
			,rootProperty : 'data'
		}
	}
});
