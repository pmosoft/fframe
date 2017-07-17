package net.pmosoft.fframe.syst.user;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserSrv {
	
	@Autowired
	private UserDao userDao;
		
	public List<Map<String, Object>> selectUserList(Map<String,String> params){
		System.out.println("start UserSrv selectUserList");
		return userDao.selectUserList(params);
	}
}
