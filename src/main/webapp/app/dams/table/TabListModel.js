Ext.define('fframe.dams.table.TabListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TabList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        TabList : {
    	    type : 'TabList'
        }
     }
});
