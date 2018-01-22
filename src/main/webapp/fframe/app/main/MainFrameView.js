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
		height: Ext.Element.getViewportHeight()-80,		
		defaults: {
	       scrollable: true
	    },		
		width : 220,
		layout : 'border',
		items : [ {
			xtype : 'treepanel',
			useArrows: true,		
			rootVisible: false,
			listeners : {
				itemclick : function(dataview, record, item, index, e, eOpts){
				    try {
                        console.log("record.get page:"+record.get("page"));
                        var centerPage = dataview.up("viewport").down("component[region=center]");
                        console.log("centerPage="+centerPage);
                        centerPage.removeAll(true);
                        var component = Ext.widget(record.get("page"));
                        centerPage.add(component);

//                        centerPage.add({
//                        xtype : record.get("page")
//                        })
                        
				    } catch(err) {
				        console.log("err="+err);
				        return;
				    }	
				} 
			},
			seArrows: true,
			store : {
				root : {
					expanded : true,
					children : [ {
						text : '유저',
						iconCls : 'x-fa fa-gift',
						expanded : false,
						selectable : false,
						children : [ {
							text : '유저목록',
							page : 'UsrList',
							leaf : true
						} ]
					}, {
						text : '메타',
						iconCls : 'x-fa fa-gift',
						expanded : false,
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
                            page : 'tabColList',
                            leaf : true
                        },{
                            text : '테이블목록',
                            page : 'tabList',
                            leaf : true
                        },{
                            text : '테이블조회',
                            selected : true,
                            page : 'tabQryList',
                            leaf : true
                        },{
                            text : '테이블정보추출',
                            page : 'extMetaTabColList',
                            leaf : true
                        } ]
					}, {
						text : '코드',
						iconCls : 'x-fa fa-gift',
						expanded : false,
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
                        expanded : false,
                        selectable : false,
                        children : [ 
                        {
                            text : 'CSV로딩',
                            page : 'samfileLod',
                            leaf : true
                        },{
                            text : '단일테이블ETT',
                            page : 'tabEtt',
                            leaf : true
                        },{
                            text : '복수테이블ETT',
                            page : 'tabsEtt',
                            leaf : true
                        },{
                            text : '쿼리ETT',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '엑셀로딩',
                            page : 'excelLod',
                            leaf : true
                        }
                        ]
                    }, {
                        text : '거버넌스',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : false,
                        selectable : false,
                        children : [ 
                        {
                            text : '화면목록정합성',
                            page : 'samfileLod',
                            leaf : true
                        },{
                            text : '화면주석정합성',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '화면소스표준화',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '배치목록정합성',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '배치주석정합성',
                            page : 'sqlEtt',
                            leaf : true
                        },{
                            text : '배치소스표준화',
                            page : 'sqlEtt',
                            leaf : true
                        }    
                        ]
                    }, {
                        text : '소스생성',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : false,
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
                        text : '메뉴',
                        iconCls : 'x-fa fa-shopping-cart',
                        expanded : false,
                        selectable : false,
                        children : [ {
                            text : '메뉴목록',
                            page : 'UserRegView',
                            leaf : true
                        } ]
					}, {
						text : '로그',
						 iconCls : 'x-fa  fa-users',
						expanded : false,
						selectable : false,
						children : [ {
							text : '로그목록',
							page : 'Test01',
							leaf : true
						} ]
					} ]
				}
			}
            ,viewConfig: {
                plugins: [{
                    ptype: 'treeviewdragdrop',
                    containerScroll: true
                }]
            }  			
		} ]
	},
	//-----------------------------	
	// center 메뉴	
	//-----------------------------	
	{ 
		xtype : 'panel' ,
		region : 'center',
        split : false,
        bodyBorder: false,                
        //margin: '10 0 10 10', 
        height: Ext.Element.getViewportHeight()-80,
        defaults: {
           scrollable: true
        },      
		flex : 1,
		items : {
			xtype : "tabQryList"
		}		
	}]
});
