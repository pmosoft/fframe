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

    /*
     * 메타테이블에서 유저별 테이블컬럼 정보를 리턴
     * @param DB접속정보 및 DB유저명
     * */
    public List<Map<String, Object>> selectMetaTabColList(Map<String,String> params);
    
    
    /*
     * 메타테이블에서 유저별 테이블 정보를 리턴
     * @param DB접속정보 및 DB유저명
     * */
    public List<Map<String, Object>> selectMetaTabList(Map<String,String> params);


    /*
     * 입력테이블의 전컬럼 정보를 리턴
     * @param DB접속정보 및 테이블명 및 rowcnt
     * */
    public List<Map<String, Object>> selectTabData(Map<String,String> params);
    
    /*
     * 입력쿼리의 기술된 컬럼정보를 리턴
     * @param DB접속정보 및 쿼리 및 rowcnt
     * */
    public List<Map<String, Object>> selectQryData(Map<String,String> params);

    public List<Map<String, Object>> selectIsExistTab(Map<String,String> params);
	
}

