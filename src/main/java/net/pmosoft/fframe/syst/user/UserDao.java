package net.pmosoft.fframe.syst.user;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
	List<Map<String, Object>> selectUserList(Map<String,String> params);
}

