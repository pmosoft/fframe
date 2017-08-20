package net.pmosoft.fframe.dams.table;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TableDao {


    /**********************************************************************************
    *
    *                                  MetaTabColInfo
    *
    **********************************************************************************/
    void deleteMetaTabColInfo(Map<String,String> params);
    void insertMetaTabColInfoList(Map<String,String> params);
    List<Map<String, Object>> selectMetaTabColInfoList(Map<String,String> params);
    List<Map<String, Object>> selectCmpTabColInfoList(Map<String,String> params);

    List<Map<String, Object>> selectMetaTabInfoList(Map<String,String> params);
    void insertCmpTabColInfoList(Map<String,String> params);
    
    /**********************************************************************************
     *
     *                                  TabColInfo
     *
     **********************************************************************************/
    List<Map<String, Object>> selectTabColInfoList(Map<String,String> params);
    int selectTabColInfoCnt(Map<String,String> params);
    void insertTabColInfo(Map<String,String> params);
    void deleteTabColInfo(Map<String,String> params);
    void updateTabColInfo(Map<String,String> params);

	/**********************************************************************************
	 *
	 *                                  TabInfo
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectTabInfoList(Map<String,String> params);
	int selectTabInfoCnt(Map<String,String> params);
	void insertTabInfo(Map<String,String> params);
	void deleteTabInfo(Map<String,String> params);
	void updateTabInfo(Map<String,String> params);

	
}

