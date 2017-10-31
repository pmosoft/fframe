package net.pmosoft.fframe.comm.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Map;


public class DbConnection {

    public Connection conn = null;
    
    public Connection getConnection(DbmsInfo dbmsInfo) {
        try {
            Class.forName(dbmsInfo.dbDriver());
            conn = DriverManager.getConnection(dbmsInfo.dbConn(),dbmsInfo.dbUser(),dbmsInfo.dbPassword());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {            
        }
 
        return conn;
    }

    public Connection getConnection(String dbDriver,String dbConn,String dbUser,String dbPassword) {
        try {
            Class.forName(dbDriver);
            conn = DriverManager.getConnection(dbConn,dbUser,dbPassword);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {            
        }
 
        return conn;
    }

    public Connection getConnection(Map<String,String> params) {
        
        System.out.println("getConnection(params)="+params);
        try {
            Class.forName(params.get("dbDriver"));
            conn = DriverManager.getConnection(params.get("dbConn"),params.get("dbUser"),params.get("dbPassword"));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {            
        }
 
        return conn;
    }
    
    
}
