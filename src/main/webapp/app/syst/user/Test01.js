Ext.define('fframe.syst.user.Test01', {
	xtype: 'Test01',    
   controller: 'Test01',

   extend: 'Ext.panel.Panel',
    alias: 'widget.binding-two-way',

    width: 300,
    bodyPadding: 10,

    viewModel: {
        data: {
            title: 'The title'
        }
    },

    bind: {
        title: '{title}'
    },

    items: {
        xtype: 'textfield',
        fieldLabel: 'Title',
        labelWidth: 50,
        // The default config for textfield in a bind is "value" (two-way):
        bind: '{title}'
    },

    tbar: [{
        text: 'Random Title',
        handler: 'onTitleButtonClick'
    }]
});