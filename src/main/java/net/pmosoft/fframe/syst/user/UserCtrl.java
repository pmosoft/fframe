package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserCtrl {

	@Autowired
	private UserSrv userSrv;
 
	@RequestMapping(value = "/usr/selectUserList")
//	public Map<String, Object> selectUserList(@RequestParam("searchCondition") String searchCondition) {
	public Map<String, Object> selectUserList(@RequestParam Map<String,String> params) {
		return userSrv.selectUserList(params);
	}
	
	@RequestMapping(value = "/usr/saveUser")
	public Map<String, Object> saveUser(@RequestParam Map<String,String> params) {
		System.out.println("insertUser USER_ID="+params.get("USER_ID"));
		System.out.println("insertUser USER_EMAIL="+params.get("USER_EMAIL"));
		return userSrv.saveUser(params);
	}	
	
/*	@InitBinder
	protected void initBinder(WebDataBinder binder){
		binder.setValidator(new UserValidator());
	}
*/	

	@RequestMapping(value = "/usr/insertUser")
	public Map<String, Object> insertUser(@RequestParam Map<String,String> params) {
		
		System.out.println("insertUser USER_ID="+params.get("USER_ID"));
		System.out.println("insertUser USER_EMAIL="+params.get("USER_EMAIL"));
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String,Object>> list = null;
		try{
			userSrv.insertUser(params);
			result.put("data", list);
		} catch (Exception e){
			e.printStackTrace();
		}
		return result;
	}	  

	@RequestMapping(value = "/usr/deleteUser")
	public Map<String, Object> deleteUser(@RequestParam Map<String,String> params) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String,Object>> list = null;
		try{
			userSrv.deleteUser(params);
			result.put("data", list);
		} catch (Exception e){
			e.printStackTrace();
		}
		return result; 
	}	

	@RequestMapping(value = "/usr/updateUser")
	public Map<String, Object> updateUser(@RequestParam Map<String,String> params) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String,Object>> list = null;
		try{
			userSrv.updateUser(params);
			result.put("data", list);
		} catch (Exception e){
			e.printStackTrace();
		}
		return result;
	}	
	
	
	
	@RequestMapping(value = "/test")
	public Map<String, Object> test() {
		Map<String, Object> result = new HashMap<String, Object>();

		result.put("name", "피승현");
		result.put("age", 50);
		return result;
	}
	
	
	
}
