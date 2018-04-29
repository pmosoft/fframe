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
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import net.pmosoft.fframe.comm.db.DbConnection;
import net.pmosoft.fframe.comm.db.LoggableStatement;
import net.pmosoft.fframe.comm.util.StringUtil;

   
public class TabMariadbDao extends TabCommonDao implements TabDaoFactory {

/*

 
 
SELECT * FROM DUAL 
 
 
 * */

    /*****************************************************************************
     *                              테이블 정보
     *****************************************************************************/
    @Override
    public List<Map<String, Object>> selectMetaTabColList(Map<String, String> params) {

        Connection conn=null; PreparedStatement pstmt=null; ResultSet rs=null; String qry="";
        
        List<Map<String, Object>> listRs = new ArrayList<Map<String, Object>>();
        
        try {
            DbConnection dbConn = new DbConnection();
            conn = dbConn.getConnection(params);

            qry  = "--                                                                                         \n";
            qry += "SELECT                                                                                     \n";
            qry += "        ?                     AS DB_NM                                                     \n";
            qry += "       ,UPPER(A.TABLE_SCHEMA) AS OWNER                                                     \n";
            qry += "       ,UPPER(A.TABLE_NAME)   AS TAB_NM                                                    \n";
            qry += "       ,A.ORDINAL_POSITION    AS COL_ID                                                    \n";
            qry += "       ,A.COLUMN_NAME         AS COL_NM                                                    \n";
            qry += "       ,A.COLUMN_COMMENT      AS COL_HNM                                                   \n";
            qry += "       ,CASE WHEN UPPER(A.DATA_TYPE) = 'INT' THEN UPPER(A.DATA_TYPE)                       \n";
            qry += "             ELSE UPPER(A.COLUMN_TYPE)                                                     \n";
            qry += "        END                   AS DATA_TYPE_DESC                                            \n";
            qry += "       ,CASE WHEN IS_NULLABLE = 'NO' THEN 'NOT NULL' ELSE '' END AS NULLABLE               \n";
            qry += "       ,CASE WHEN A.COLUMN_KEY = 'PRI' THEN 'Y' ELSE '' END    AS PK                                                        \n";
            qry += "       ,UPPER(A.DATA_TYPE)    AS DATA_TYPE_NM                                              \n";
            qry += "       ,CASE WHEN UPPER(A.DATA_TYPE) IN ('CHAR','VARCHAR') THEN A.CHARACTER_MAXIMUM_LENGTH \n";
            qry += "             WHEN UPPER(A.DATA_TYPE) IN ('INT','NUMERIC') THEN A.NUMERIC_PRECISION         \n";
            qry += "        END                   AS LEN                                                       \n";
            qry += "       ,A.NUMERIC_SCALE       AS DECIMAL_CNT                                               \n";
            qry += "       ,' '                   AS COL_DESC                                                  \n";
            qry += "       ,DATE_FORMAT(NOW(),'%Y%m%d%H%i') AS REG_DTM                                         \n";
            qry += "       ,''                    AS REG_USR_ID                                                \n";
            qry += "       ,DATE_FORMAT(NOW(),'%Y%m%d%H%i') AS UPD_DTM                                         \n";
            qry += "       ,''                    AS UPD_USR_ID                                                \n";
            qry += "FROM   INFORMATION_SCHEMA.COLUMNS A                                                        \n";
            qry += "WHERE  1=1                                                                                 \n";
            qry += "AND    A.TABLE_SCHEMA = ?                                                                  \n";
            qry += "AND    A.TABLE_NAME LIKE CONCAT(CONCAT('%',?),'%')                                         \n";
            //qry += "AND    A.COLUMN_NAME LIKE '%'                                                              \n";
            qry += "ORDER BY A.TABLE_NAME,A.ORDINAL_POSITION                                                   \n";

            pstmt = new LoggableStatement(conn,qry);
            pstmt.setString(1, params.get("datasource"));
            pstmt.setString(2, params.get("dbOwner"));
            pstmt.setString(3, params.get("TAB_NM"));
            
            System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery(); ResultSetMetaData rsmd = rs.getMetaData();
            while(rs.next()){
                LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
                for (int i = 0; i < rsmd.getColumnCount(); i++) 
                    map.put(rsmd.getColumnLabel(i+1) ,rs.getString(i+1)); 
                listRs.add(map);
            }
        } catch (Exception e) { e.printStackTrace();
        } finally { if(conn != null) try { pstmt.close(); conn.close();} catch(Exception ee){}}
        
        return listRs;
    }


    @Override
    public List<Map<String, Object>> selectMetaTabList(Map<String, String> params) {
        Connection conn=null; PreparedStatement pstmt=null; ResultSet rs=null; String qry="";
        
        List<Map<String, Object>> listRs = new ArrayList<Map<String, Object>>();
        
        try {
            DbConnection dbConn = new DbConnection();
            conn = dbConn.getConnection(params);

            //원본쿼리 : net.pmosoft.fframe.dams.table.TabMariadbDao.xml - insertMetaTabColList
            qry  = "--                                                                  \n";
            qry += "SELECT                                                              \n";
            qry += "       ?                      AS DB_NM                              \n";
            qry += "     , UPPER(A.TABLE_SCHEMA)  AS OWNER                              \n";
            qry += "     , UPPER(A.TABLE_NAME)    AS TAB_NM                             \n";
            qry += "     , UPPER(A.TABLE_COMMENT) AS TAB_HNM                            \n";
            qry += "     , ''                     AS TAB_DESC                           \n";
            qry += "     , A.TABLE_ROWS           AS ROW_CNT                            \n";
            qry += "     , DATE_FORMAT(NOW(),'%Y%m%d%H%i') AS REG_DTM                   \n";
            qry += "     , ''                    AS REG_USR_ID                          \n";
            qry += "     , DATE_FORMAT(NOW(),'%Y%m%d%H%i') AS UPD_DTM                   \n";
            qry += "     , ''                    AS UPD_USR_ID                          \n";
            qry += "FROM   INFORMATION_SCHEMA.TABLES A                                  \n";
            qry += "WHERE  1=1                                                          \n";
            qry += "AND    A.TABLE_SCHEMA = ?                                           \n";
            qry += "AND   (UPPER(A.TABLE_NAME) LIKE UPPER(CONCAT(CONCAT('%',?),'%'))    \n";
            qry += "       OR                                                           \n";
            qry += "       UPPER(A.TABLE_COMMENT) LIKE UPPER(CONCAT(CONCAT('%',?),'%')) \n";
            qry += "       )                                                            \n";
            qry += "ORDER BY A.TABLE_SCHEMA, A.TABLE_NAME                               \n";
            
            //System.out.println(qry);

            pstmt = new LoggableStatement(conn,qry);
            pstmt.setString(1, params.get("datasource"));
            pstmt.setString(2, params.get("dbOwner"));
            pstmt.setString(3, params.get("TAB_NM"));
            pstmt.setString(4, params.get("TAB_NM"));
            
            System.out.println(((LoggableStatement)pstmt).getQueryString() + "\n");
            rs = pstmt.executeQuery(); ResultSetMetaData rsmd = rs.getMetaData();
            while(rs.next()){
                LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
                for (int i = 0; i < rsmd.getColumnCount(); i++) 
                    map.put(rsmd.getColumnName(i+1) ,rs.getString(i+1)); 
                listRs.add(map);
            }
        } catch (Exception e) { e.printStackTrace();
        } finally { if(conn != null) try { pstmt.close(); conn.close();} catch(Exception ee){}}
        
        return listRs;
    }


    @Override
    public String selectDropTabScript(Map<String, String> params) {
        return "DROP TABLE "+params.get("dbOwner")+"."+params.get("TAB_NM")+";";
    }
    
    @Override
    public String selectCreateTabScript(Map<String, String> params) {
        
       List<Map<String, Object>> list = selectMetaTabColList(params);
       
       String c03 = "";
       String c01 = "CREATE TABLE "+params.get("dbOwner")+"."+params.get("TAB_NM")+"( \n";
       c03 = c01;
       String pkStr = "";
       List<String> pkList = new ArrayList<String>();
       
       for (int i = 0; i < list.size(); i++) {
       //for (int i = 0; i < 1; i++) {
           String c02 = "";
           c02 += StringUtil.rightPad((String)list.get(i).get("COL_NM"), 25);
           c02 += StringUtil.rightPad((String)list.get(i).get("DATA_TYPE_DESC"), 15);
           c02 += StringUtil.rightPad((String)list.get(i).get("NULLABLE"), 10);
           c02 += "\n";
           c03 += c02;
           
           if((String)list.get(i).get("PK") == "Y"){
               pkStr += list.get(i).get("COL_NM")+",";
           }

       }
       c03 += pkStr;
       
       System.out.println( c03 );
       String s1 = "";
       
       return null;
    }

    @Override
    public String selectTabCommentScript(
            Map<String, String> params) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String selectColCommentScript(
            Map<String, String> params) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String selectGrantUsrScript(
            Map<String, String> params) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String selectIndexScript(
            Map<String, String> params) {
        // TODO Auto-generated method stub
        return null;
    }    
    
    /*****************************************************************************
     *                                 ETT
     *****************************************************************************/
    @Override
    public List<Map<String, Object>> selectCsvData(Map<String, String> params)
            throws Exception {
        // TODO Auto-generated method stub
        return null;
    }
    
    
}

