package net.pmosoft.fframe.dams.table.dynamic;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

 
public class TabDynamicTest {

    @Test
    public void selectQryData() throws Exception {
        Map<String, String> params = new HashMap<String, String>();
        params.put("dbDriver"  , "org.hsqldb.jdbcDriver");        
        params.put("dbConn"    , "jdbc:log4jdbc:mariadb://pmosoft.net:3306/fframe");        
        params.put("dbUser"    , "fframe");        
        params.put("dbPassword", "f1234");        
        params.put("dbType"    , "MARIADB");        
        params.put("dbOwner"   , "FFRAME");        
        params.put("TAB_NM"    , "TDACM00060");   
        params.put("qry"       , "SELECT * FROM TDACM00060");   
        
        TabDaoFactory tabDaoFactory = (TabDaoFactory) Class.forName("net.pmosoft.fframe.dams.table.dynamic.TabMariadbDao").newInstance();            
        List<Map<String,Object>> listMeta = tabDaoFactory.selectQryData(params);

        System.out.println("listMeta="+listMeta); 
    }

}
