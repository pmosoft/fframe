Ext.define('fframe.view.syst.user.UserList', {
    extend: 'Ext.form.Panel',
    xtype: 'UserList',
    controller: 'UserList',
    viewModel: 'UserList',    
    title : '사용자 조회',
    
    
    listeners : {
    	// boxready : 'onLoadData',
    	resize : 'setGridHeight'
//    	,
//        keypress : function(textfield,eo){
//            if (eo.getCharCode() == Ext.EventObject.ENTER) {
//                //enter is pressed call the next buttons handler function here.
//                this.up('panel').down('button').handler
//            }
//        }    	
	},
    items : [{
    	xtype : 'toolbar',
    	items : [{
    		xtype : 'combo',
    		name : 'searchCondition',
    		editable : false,
    		displayField : 'key',
    		valueField : 'value',
    		queryMode : 'local',
    		// value : 'USER_NM',
    	    bind : {
    	    	value : '{searchKeyCombo}'
    	    },
    		store : {
    			fields : ['key','value'], 
    			data : [{
    				key : '이름',
    				value : 'USER_NM'
    			},{
    				key : '아이디',
    				value : 'USER_ID'
    			}]
    		}
    	},{
    		xtype : 'textfield',
    		name : 'searchValue',
    	    emptyText : '검색어를 입력하세요',
    	    // value : 'aaaa',
    	    bind : {
    	    	value : '{searchValue}'
    	    }
    	    
    	    ,listeners: {
              specialkey: function(f,e){
                if (e.getKey() == e.ENTER) {
                	//this.getController('user.UserListController').selBtn(e);
                	//fframe.app.getController('view.syst.user.UserListController').selBtn(this);
                	//var ctrl = new fframe.view.syst.user.UserListController();
                	//controller.selBtn();
                	
                	//f.up('form').getForm().submit();
                	 //var selBtn = f.up('toolbar').down('button#selBtn');
        			//selBtn.fireEvent('click', selBtn, event, options);
                	
                }
              }
            }
    	    
    	},'->',
    	{
    		xtype : 'button',
    		text : '신규',
			handler : 'insBtn'
    	},{
    		xtype : 'button',
    		text : '삭제',
   			handler : 'delBtn'
		},{
			xtype : 'button',
			text : '조회',
   			handler : 'selBtn'
		}] 
    },{ 
    	xtype : 'grid',
    	height : 150,
    	border : true,
    	columnLines : true,
    	listeners : {
    		//cellclick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts){
    		celldblclick : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts){
    			
    	    	var userReg = Ext.create("fframe.view.syst.user.UserRegView");
    	    	var viewModel = userReg.getViewModel();

    	    	viewModel.set("USER_ID",record.get("USER_ID"));
    	    	
    	    	userReg.show();
    			//console.log(record.getData());
    			//console.log(record.get("USER_ID"));    			
    		},
    		itemcontextmenu : function( obj, record, item, index, e, eOpts){
    			console.log(record.get("USER_NM"));
    		}
    	},
        columns : [{
        	xtype : 'rownumberer'
        },{
        	text : '아이디',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USER_ID'
        },{
        	text : '이메일',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USER_EMAIL'
        },{
        	text : '암호',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USER_PW'
        },{
        	text : '이름',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USER_NM'
        },{
        	text : '나이',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USER_AGE'
        },{
        	text : '사용여부',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'USE_YN'
        },{
        	text : '변경일시',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'UPD_DT'
        },{
        	text : '변경자',
        	style : 'text-align:center',
        	flex : 1,
        	dataIndex : 'UPD_USER_ID'
        }],
        bind : {
        	store : '{UserList}'
        },
	    bbar : {
	    	xtype : 'pagingtoolbar',
	    	plugins : 'ux-progressbarpager',
	    	// plugins : 'ux-slidingpager',
	    	displayInfo : true
	    }    
    }]
});
