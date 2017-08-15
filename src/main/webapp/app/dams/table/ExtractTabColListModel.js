Ext.define('fframe.dams.table.ExtractTabColListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.ExtractTabColList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        ExtractTabColList : {
    	    type : 'ExtractTabColList'
        }
     }
});
