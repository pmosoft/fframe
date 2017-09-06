Ext.define('fframe.dams.table.TabListStore', {
     extend: 'Ext.data.BufferedStore'
    ,alias: 'store.TabList'
    ,storedId : 'TabList'
    ,autoLoad : false
    ,fields : ['PKG_FUL_NM','PKG2_NM','PKG3_NM','PKG4_NM','PKG_HNM','PKG_DESC','USE_YN','REG_DTM','REG_USR_ID','UPD_DTM','UPD_USR_ID']
	,proxy : {
		 type : 'ajax'
		,url : '/dams/pack/selectTabList'
		,reader : {
			 type : 'json'
			,rootProperty : 'data'
		}
	}
});
