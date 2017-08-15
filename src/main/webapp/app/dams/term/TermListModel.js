Ext.define('fframe.dams.term.TermListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TermList'
    ,data : {
    	searchValue : ''
     }
    ,stores : {
        TermList : {
    	    type : 'TermList'
        }
     } 
});
