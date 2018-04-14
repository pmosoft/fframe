/*******************************************************************************
@title:테이블DAO를 생성하는 인터페이스 
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

import java.util.List;
import java.util.Map;

public interface TabDaoFactory {

    /*****************************************************************************
     *                              테이블 정보
     *****************************************************************************/
    /*
     * 컬럼 정보 리턴
     * @param DB접속정보 및 DB유저명
     * */
    public List<Map<String, Object>> selectMetaTabColList(Map<String,String> params);
    
    /*
     * 테이블 정보 리턴
     * @param DB접속정보 및 DB유저명
     * */
    public List<Map<String, Object>> selectMetaTabList(Map<String,String> params);

    /*****************************************************************************
     *                                 쿼리
     *****************************************************************************/
    /*
     * 테이블 전컬럼 데이터 리턴
     * @param DB접속정보 및 테이블명 및 rowcnt
     * */
    public List<Map<String, Object>> selectTabData(Map<String,String> params);
    
    /*
     * 쿼리 데이터 리턴
     * @param DB접속정보 및 쿼리 및 rowcnt
     * */
    public List<Map<String, Object>> selectQryData(Map<String,String> params) throws Exception;

     
    
    public List<Map<String, Object>> selectIsExistTab(Map<String,String> params);

    /*****************************************************************************
     *                                 ETT
     *****************************************************************************/
    /*
     * Insert 문장 리턴(모든 컬럼)
     * @param DB접속정보 및 테이블명
     * */
    public List<Map<String, Object>> selectCsvData(Map<String,String> params) throws Exception;
    
    public String selectInsertData(Map<String,String> params) throws Exception;

}

