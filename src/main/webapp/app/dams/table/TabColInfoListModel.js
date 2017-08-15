Ext.define('fframe.dams.table.TabColInfoListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabColInfoList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        TabColInfoList : {
    	    type : 'TabColInfoList'
        }
     }
});
