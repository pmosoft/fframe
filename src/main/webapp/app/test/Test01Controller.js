Ext.define('fframe.syst.test.Test01Controller', {
    alias: 'controller.Test01',
	extend: 'Ext.app.ViewController',
    
   onTitleButtonClick: function() {
        var title = 'Title' + Ext.Number.randomInt(1, 100);
        this.getViewModel().set('title', title);
    }
});