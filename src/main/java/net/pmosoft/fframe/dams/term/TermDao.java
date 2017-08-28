package net.pmosoft.fframe.dams.term;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TermDao {


	/**********************************************************************************
	 *
	 *                                  Term
	 *
	 **********************************************************************************/
    List<Map<String, Object>> selectExtTermList(Map<String,String> params);
	List<Map<String, Object>> selectTermList(Map<String,String> params);
	int selectTermCnt(Map<String,String> params);
	void insertTerm(Map<String,String> params);
	void deleteTerm(Map<String,String> params);
	void updateTerm(Map<String,String> params);

}

