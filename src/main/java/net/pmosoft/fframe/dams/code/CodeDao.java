package net.pmosoft.fframe.dams.code;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CodeDao {


	/**********************************************************************************
	 *
	 *                                  CodeInfo
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectCodeInfoList(Map<String,String> params);
	int selectCodeInfoCnt(Map<String,String> params);
	void insertCodeInfo(Map<String,String> params);
	void deleteCodeInfo(Map<String,String> params);
	void updateCodeInfo(Map<String,String> params);

}

