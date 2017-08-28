Ext.define('fframe.dams.term.TermListModel', {
     extend: 'Ext.app.ViewModel'
    ,alias: 'viewmodel.TermList'
    ,data : {
         searchKeyCombo : 'COL_HNM'
        ,searchValue : ''
        ,termStsCd : '99'
     }
    ,stores : {
        TermList : {
    	    type : 'TermList'
        }
     } 
});
