Ext.define('fframe.app.main.MainFrameView', {  
	extend : 'Ext.container.Viewport',
	xtype : 'MainFrame',
	layout : 'border',
	
	
//    defaults: {
//        //collapsible: true,
//        split: false,
//        bodyPadding: 10
//    },
	
	items :
	//-----------------------------	
	// top 메뉴	
	//-----------------------------	
	[{
		xtype : 'panel',
		region : 'north',
		title : 'FFRAME',
		//split: true,
        //collapsible: true,        
		bodyBorder: false,
		//height : 80,
		header : false,
		items : [{
			xtype : 'toolbar',
			style:'border-color:#99BBE8;background-color:#D3E1F1 !important;',
			
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
		title : 'Menu',
		region : 'west',
		split : true,
		collapsible: true,
		header : false,
		//width : 200,
		layout : 'fit',

		items : [ {
			xtype : 'treelist',
			listeners : {
			    boxready : function ( obj, record){
			        centerPage.removeAll(true);
			        centerPage.add({
                        xtype : "UsrList"
			        })
			    },
				selectionchange : function ( obj, record){
				    try {
    					console.log("record.get page:"+record.get("page"));
    					var centerPage = obj.up("viewport").down("component[region=center]");
    					//console.log("centerPage="+centerPage);
    					centerPage.removeAll(true);
    					centerPage.add({
    						xtype : record.get("page")
    						//xtype : "UsrList"
    					})
				    } catch(err) {
				    }	
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
							page : 'UsrList',
							leaf : true
						} ]
					}, {
						text : '메타',
						iconCls : 'x-fa fa-gift',
						expanded : true,
						selectable : false,
						children : [ 
			            {
							text : '표준용어',
							page : 'termList',
							leaf : true
						},{
                            text : '표준용어추출',
                            page : 'extTermList',
                            leaf : true
						},{
							text : '약어',
							page : 'abbrList',
							leaf : true
						},{
							text : '인포타입',
							page : 'infoList',
							leaf : true
						},{
							text : '패키지',
							page : 'packList',
							leaf : true
						}]
                    }, {
                        text : '테이블',
                        iconCls : 'x-fa fa-gift',
                        expanded : true,
                        selectable : false,
                        children : [ 
                        {
                            text : '테이블컬럼목록',
                            page : 'TabColList',
                            leaf : true
                        },{
                            text : '테이블목록',
                            page : 'tabList',
                            leaf : true
                        },{
                            text : '테이블정보추출',
                            page : 'extMetaTabColList',
                            leaf : true
                        } ]
					}, {
						text : '코드',
						iconCls : 'x-fa fa-gift',
						expanded : true,
						selectable : false,
						children : [ 
			            {
							text : '코드목록',
							page : 'codeList',
							leaf : true
                        },{
                            text : '코드등록',
                            page : 'codeRegList',
                            leaf : true
                        },{
                            text : '코드확장목록',
                            page : 'codeExtList',
                            leaf : true
                        },{
                            text : '코드확장등록',
                            page : 'codeExtRegList',
                            leaf : true
						}
						]
                    }, {
                        text : 'ETCL',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : true,
                        selectable : false,
                        children : [ 
                        {
                            text : 'CSV로딩',
                            page : 'samfileLod',
                            leaf : true
                        },{
                            text : '테이블로딩',
                            page : 'tabEtt',
                            leaf : true
                        },{
                            text : '쿼리로딩',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '엑셀로딩',
                            page : 'excelLod',
                            leaf : true
                        }
                        ]
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
                        text : '소스생성',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : true,
                        selectable : false,
                        children : [ 
                        {
                            text : '소스복사',
                            page : 'genPgmByCopy',
                            leaf : true
                        },{
                            text : '탬플릿이용',
                            page : 'genPgmByTmpl',
                            leaf : true
                        }]
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
        split : false,
        bodyBorder: false,
		flex : 1,
		items : {
			xtype : 'panel',
			html : "<h2>Main DashBoard</h2>"
		}		
	}]
});
