Ext.define('fframe.dams.pack.PackInfoListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.PackInfoList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        PackInfoList : {
    	    type : 'PackInfoList'
        }
     } 
});
