/*******************************************************************************
@title:테이블DAO를 마리아DB로 구현 
@description-start
@description-end  
@developer:피승현
@progress-rate:80%
@update-history-start
-------------------------------------------------------------------------------
|   날짜   |수정자|내용
-------------------------------------------------------------------------------
|2017.11.01|피승현|최초개발
-------------------------------------------------------------------------------
@update-history-end
********************************************************************************/

package net.pmosoft.fframe.dams.table.dynamic;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import net.pmosoft.fframe.comm.db.DbConnection;
import net.pmosoft.fframe.comm.db.LoggableStatement;

   
public class TabCommonDao implements TabDaoFactory {


    /**********************************************************************************
    *
    *                                    Meta
    *
    **********************************************************************************/
    
    @Override
    public List<Map<String, Object>> selectMetaTabColList(Map<String, String> params) {
        return null;
    }


    @Override
    public List<Map<String, Object>> selectMetaTabList(Map<String, String> params) {
        return null;
    }

    
    @Override
    public List<Map<String, Object>> selectTabData(Map<String, String> params) {

        Connection conn=null; PreparedStatement pstmt=null; ResultSet rs=null; String qry="";
        
        List<Map<String, Object>> listRs = new ArrayList<Map<String, Object>>();
        
        try {
            DbConnection dbConn = new DbConnection();
            conn = dbConn.getConnection(params);

            qry  = "SELECT  * FROM " + params.get("TAB_NM") + " \n";
            //qry += "WHERE                                       \n";

            //System.out.println(qry);

            pstmt = new LoggableStatement(conn,qry);
            pstmt.setString(1, params.get("datasource"));

            //System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery();
            
            ResultSetMetaData rsmd = rs.getMetaData();
            int colCnt = rsmd.getColumnCount();
            
            System.out.println("colCnt="+colCnt);
            
            //for (int i = 0; i < colCnt; i++) {
            //    System.out.println(rsmd.getColumnName(i+1));
            //}
            
            //System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery();
            
            while(rs.next()){
                HashMap<String, Object> map = new HashMap<String, Object>();
                
                for (int i = 0; i < colCnt; i++) {
                    map.put(rsmd.getColumnName(i+1) ,rs.getString(i+1));
                    //if(i==0) System.out.println(rsmd.getColumnName(i+1));
                }
                listRs.add(map);
            }
            
        } catch (Exception e) { e.printStackTrace();
        } finally { if(conn != null) try { pstmt.close(); conn.close();} catch(Exception ee){}}
        
        return listRs;
    }

    @Override
    public List<Map<String, Object>> selectQryData(Map<String, String> params) throws Exception {
        Connection conn=null; PreparedStatement pstmt=null; ResultSet rs=null; String qry="";
        
        List<Map<String, Object>> listRs = new ArrayList<Map<String, Object>>();

        
        try {
            DbConnection dbConn = new DbConnection();
            conn = dbConn.getConnection(params);

            qry  = params.get("qry");
            pstmt = new LoggableStatement(conn,qry);
            pstmt.setString(1, params.get("datasource"));

            System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery();
            
            ResultSetMetaData rsmd = rs.getMetaData();
            int colCnt = rsmd.getColumnCount();

            for (int i = 0; i < colCnt; i++) {
                System.out.println(rsmd.getColumnName(i+1));
            }
            
            System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery();
            
            while(rs.next()){
                HashMap<String, Object> map = new HashMap<String, Object>();
                
                for (int i = 0; i < colCnt; i++) {
                    map.put(rsmd.getColumnName(i+1) ,rs.getString(i+1));
                    if(i==0) System.out.println(rsmd.getColumnName(i+1));
                }
                listRs.add(map);
            }
            
        } catch (Exception e) { 
            e.printStackTrace();
            throw e;
        } finally { if(conn != null) try { pstmt.close(); conn.close();} catch(Exception ee){}}
        
        return listRs;
    }

    @Override
    public List<Map<String, Object>> selectIsExistTab(Map<String, String> params) {
        // TODO Auto-generated method stub
        return null;
    }


    @Override
    public List<Map<String, Object>> downloadCsvData(Map<String, String> params)
            throws Exception {
        // TODO Auto-generated method stub
        return null;
    }
    

}

