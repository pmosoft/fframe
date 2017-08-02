Ext.define('fframe.store.UserList', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.UserList',
    storedId : 'UserList',
    autoLoad : false,   
    fields : ['USER_ID','USER_EMAIL','USER_PW','USER_NM','USER_AGE','USE_YN','REG_DT','REG_USER_ID','UPD_DT','UPD_USER_ID'],
	proxy : {
		type : 'ajax',    			
		url : '/usr/selectUserList',
		reader : {
			type : 'json',
			rootProperty : 'data'	
		}
	} 
});
