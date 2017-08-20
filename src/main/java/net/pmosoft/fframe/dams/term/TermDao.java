package net.pmosoft.fframe.dams.term;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TermDao {


	/**********************************************************************************
	 *
	 *                                  Pack
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectPackList(Map<String,String> params);
	int selectPackCnt(Map<String,String> params);
	void insertPack(Map<String,String> params);
	void deletePack(Map<String,String> params);
	void updatePack(Map<String,String> params);

}

