Ext.define('fframe.syst.usr.UsrListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UsrList',
    data : {
    	searchKeyCombo : 'USR_NM',
    	searchValue : '',
    },
    stores : {
    	UsrList : {
    		type : 'UsrList'
    	}
    } 
});
