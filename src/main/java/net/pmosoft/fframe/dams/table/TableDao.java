package net.pmosoft.fframe.dams.table;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TableDao {


	/**********************************************************************************
	 *
	 *                                  TableInfo
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectTableInfoList(Map<String,String> params);
	int selectTableInfoCnt(Map<String,String> params);
	void insertTableInfo(Map<String,String> params);
	void deleteTableInfo(Map<String,String> params);
	void updateTableInfo(Map<String,String> params);

}

