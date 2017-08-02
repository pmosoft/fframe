package net.pmosoft.fframe.dams;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DataArchDao {
	
	
	/***********************************************************
	 * PackInfo
	 **********************************************************/
	List<Map<String, Object>> selectPackInfoList(Map<String,String> params);
	int selectPackInfoCnt(Map<String,String> params);
	void insertPackInfo(Map<String,String> params);
	void deletePackInfo(Map<String,String> params);
	void updatePackInfo(Map<String,String> params);
	
}

