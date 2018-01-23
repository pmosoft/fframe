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
        xtype : 'leftmenu',
        //margin: '5 0 0 5',
        collapsible: true,
        title: 'Menu',
        region: 'west',
        header : false,
        height: Ext.Element.getViewportHeight()-80,     
        defaults: {
           scrollable: true
        },      
        width : 220,
        //layout : 'border',        
        split: true
    },
    //----------------------------- 
    // center 메뉴    
    //----------------------------- 
    { 
        xtype: 'tabpanel',
        region: 'center',
        itemId: 'maintab',
        split : false,
        bodyBorder: false,                
        //margin: '10 0 10 10', 
        height: Ext.Element.getViewportHeight()-80,
        defaults: {
           scrollable: true
        },      
        flex : 1,        
        margin: '5 5 0 0'
    }]
});
