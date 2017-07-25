package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserSrv {
	
	@Autowired
	private UserDao userDao;
		
	public Map<String, Object> selectUserList(Map<String,String> params){
		System.out.println("start UserSrv selectUserList");
		
		System.out.println("params111 searchKeyCombo="+params.get("searchKeyCombo"));
		System.out.println("params221 searchValue="+params.get("searchValue"));
		
		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = userDao.selectUserList(params);;
			result.put("isSuccess", true);
			result.put("data", list);
		} catch (Exception e){
			result.put("isSuccess", false);
			result.put("errUserMsg", "시스템 장애가 발생하였습니다");
			result.put("errSysrMsg", e.getMessage());
			e.printStackTrace();
		}
		return result;		
	}

	public Map<String, Object> saveUser(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = new UserValidator().validate(params);
		if(errors.size()>0){
			//model.addAttribute("tbUser", tbUser);
			result.put("isSuccess", false);
			result.put("errUserMsg", "입력값을 확인해 주시기 바랍니다.");
			return result;
		} else {	 
			try{
				//userDao.insertUser(params);
				result.put("isSuccess", true);
				result.put("msg", "저장 되었습니다");
			} catch (Exception e){
				e.printStackTrace();
				result.put("errSysMsg", e.toString());
			}
			return result;
		}	
		
		
		
		
	}
	
	public void insertUser(Map<String,String> params){
		userDao.insertUser(params);
	}

	public void deleteUser(Map<String,String> params){
		userDao.deleteUser(params);
	}

	public void updateUser(Map<String,String> params){
		userDao.updateUser(params);
	}
	
}
