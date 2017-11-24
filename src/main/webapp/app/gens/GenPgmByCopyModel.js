Ext.define('fframe.gens.GenPgmByCopyModel', {
     extend : 'Ext.app.ViewModel'
    ,alias  : 'viewmodel.genPgmByCopy'
    ,data   : {
         srcPackNm     : 'net.pmosoft.fframe.dams.table'
        ,srcPgmNm      : 'ExtMetaTabColListView'
        ,tarPackNm     : 'net.pmosoft.fframe.dams.abbr'
        ,tarPgmNm      : 'AbbrListView'
        ,genResult     : ''
        ,CD            : '01'       
        ,CD_NM         : 'EXTJSP'       
        ,CD_HNM        : 'EXTJSP'       
        ,CD_DESC       : ''
        ,pgmPath       : ''            
     }
});


 