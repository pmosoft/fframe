package net.pmosoft.fframe.dams.code;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CodeDao {


	/**********************************************************************************
	 *
	 *                                  Code
	 *
	 **********************************************************************************/
	List<Map<String, Object>> selectCodeList(Map<String,String> params);
	int selectCodeCnt(Map<String,String> params);
	void insertCode(Map<String,String> params);
	void deleteCode(Map<String,String> params);
	void updateCode(Map<String,String> params);

    /**********************************************************************************
    *
    *                                  CodeReg
    *
    **********************************************************************************/
   List<Map<String, Object>> selectCodeRegList(Map<String,String> params);
	
	
}

