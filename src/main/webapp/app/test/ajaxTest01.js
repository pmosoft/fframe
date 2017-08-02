Ext.define('fframe.ajaxTest01', {
    extend: 'Ext.panel.Panel',
    xtype: 'test-ajax',
    width : 500,
    height : 500,
    items : [{
    	xtype : 'button',
    	text : 'Click',
    	handler : function(btn) {
    		Ext.Ajax.request({
    			url : '/usr/selectUserList',
    			success : function(res) {
    				var api = Ext.decode(res.responseText);
    				console.log(api);
    			}
    		});
    	}
    }]
});
