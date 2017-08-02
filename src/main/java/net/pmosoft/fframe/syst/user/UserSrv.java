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

	@Autowired
	private UserValidatorSrv userValidatorSrv;
	
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

		
		System.out.println(userDao.selectUserCnt(params));		
		
		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = userValidatorSrv.validateSaveUser(params);
		if(errors.size()>0){
			//model.addAttribute("tbUser", tbUser);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {	 
			try{
		    	result.put("isSuccess", true);
				
			    if  (userDao.selectUserCnt(params)==0) {
			    	userDao.insertUser(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	userDao.updateUser(params);
			    	result.put("msg", "갱신 되었습니다");
			    }	
			} catch (Exception e){
				e.printStackTrace();
				result.put("errUserMsg", "시스템 장애가 발생되었습니다.");
				//result.put("errSysMsg", e.toString());
			}
			return result;
		}	
	}

	public Map<String, Object> deleteUser(Map<String,String> params){
		
		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = userValidatorSrv.validateDeleteUser(params);
		if(errors.size()>0){
			//model.addAttribute("tbUser", tbUser);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {	 
			userDao.deleteUser(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;			
		}	
	}
	
}
