package net.pmosoft.fframe.dams.table;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TabDao {


    /**********************************************************************************
    *
    *                                  MetaTabCol
    *
    **********************************************************************************/
    void deleteMetaTabCol(Map<String,String> params);
    void insertMetaTabColList(Map<String,String> params);
    List<Map<String, Object>> selectMetaTabColList(Map<String,String> params);
    List<Map<String, Object>> selectCmpTabColList(Map<String,String> params);

    List<Map<String, Object>> selectMetaTabList(Map<String,String> params);
    void insertCmpTabColList(Map<String,String> params);
    
    /**********************************************************************************
     *
     *                                  TabCol
     *
     **********************************************************************************/
    List<Map<String, Object>> selectTabColList(Map<String,String> params);
    int selectTabColCnt(Map<String,String> params);
    void insertTabCol(Map<String,String> params);
    void deleteTabCol(Map<String,String> params);
    void updateTabCol(Map<String,String> params);

	/**********************************************************************************
	 *
	 *                                  Tab
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectTabList(Map<String,String> params);
	int selectTabCnt(Map<String,String> params);
	void insertTab(Map<String,String> params);
	void deleteTab(Map<String,String> params);
	void updateTab(Map<String,String> params);

	
}

