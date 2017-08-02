Ext.define('fframe.syst.user.UserListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.UserList',
    data : {
    	searchKeyCombo : 'USER_NM',
    	searchValue : '',
    },
    stores : {
    	UserList : {
    		type : 'UserList'
    	}
    } 
});
