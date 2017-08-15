Ext.define('fframe.dams.table.TabInfoListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabInfoList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        TabInfoList : {
    	    type : 'TabInfoList'
        }
     }
});
