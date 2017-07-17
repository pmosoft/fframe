Ext.define('fframe.view.main.MainFrame', {  
	extend : 'Ext.container.Viewport',
	xtype : 'MainFrame',
	layout : 'border',
	items :
	//-----------------------------	
	// top 메뉴	
	//-----------------------------	
	[{
		xtype : 'panel',
		region : 'north',
		title : 'FFRAME',
		height : 80,
		header : false,
		items : [{
			xtype : 'toolbar',
			items : [
			{
				xtype : 'label',
				html : '<h2>FFRAME</h2>'
			},'->',
			{
				xtype : 'button',
				text : 'xxx님',
				menu : [{
					text : '비밀번호변경'
				},{
					text : '로그아웃'
				}]
			}]
		}]
	},
	//-----------------------------	
	// left 메뉴	
	//-----------------------------	
	{
		xtype : 'panel',
		region : 'west',
		split : true,
		width : 200,
		layout : 'fit',
		items : [ {
			xtype : 'treelist',
			listeners : {
				selectionchange ( obj, record){
					console.log(record.get("page"));
					var centerPage = obj.up("viewport").down("component[region=center]");					
					centerPage.removeAll(true);
					centerPage.add({
						xtype : record.get("page")
					})
					
				} 
			},
			store : {
				root : {
					expanded : true,
					children : [ {
						text : '유저',
						iconCls : 'x-fa fa-gift',
						expanded : true,
						selectable : false,
						children : [ {
							text : '유저목록',
							page : 'UserList',
							leaf : true
						} ]
					}, {
						text : '메뉴',
						iconCls : 'x-fa fa-shopping-cart',
						expanded : true,
						selectable : false,
						children : [ {
							text : '메뉴목록',
							page : 'UserRegView',
							leaf : true
						} ]
					}, {
						text : '로그',
						 iconCls : 'x-fa  fa-users',
						expanded : true,
						selectable : false,
						children : [ {
							text : '로그목록',
							page : 'Test01',
							leaf : true
						} ]
					} ]
				}
			}
		} ]
	},
	//-----------------------------	
	// center 메뉴	
	//-----------------------------	
	{ 
		xtype : 'panel',
		region : 'center',
		flex : 1,
		items : {
			xtype : 'panel',
			html : "<h2>Main DashBoard</h2>"
		}		
	}]
});
