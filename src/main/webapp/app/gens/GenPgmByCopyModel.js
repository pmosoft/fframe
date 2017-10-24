Ext.define('fframe.gens.GenPgmByCopyModel', {
     extend : 'Ext.app.ViewModel'
    ,alias  : 'viewmodel.genPgmByCopy'
    ,data   : {
         srcPackNm     : "net.pmosoft.fframe.dams.code"
        ,srcPgmNm      : "TestList"
        ,tarPackNm     : "net.pmosoft.fframe.dams.code"
        ,tarPgmNm      : "TestList"
        ,tmplCd        : "grid01"
        ,isFrontExe    : true
        ,isBackExe     : true
     }
});


