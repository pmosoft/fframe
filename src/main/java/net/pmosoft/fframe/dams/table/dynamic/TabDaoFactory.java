package net.pmosoft.fframe.dams.table.dynamic;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;


public interface TabDaoFactory {
    
    public List<Map<String, Object>> selectMetaTabColList(Map<String,String> params);
    public List<Map<String, Object>> selectMetaTabList(Map<String,String> params);

    public List<Map<String, Object>> selectTabColList(Map<String,String> params);
    public List<Map<String, Object>> selectTabList(Map<String,String> params);
    public List<Map<String, Object>> selectIsExistTab(Map<String,String> params);
	
}

