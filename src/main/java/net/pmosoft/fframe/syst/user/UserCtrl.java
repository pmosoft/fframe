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

/**
 * @author Administrator
 *
 */
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
		return userSrv.saveUser(params);
	}	
	 
/*	@InitBinder
	protected void initBinder(WebDataBinder binder){
		binder.setValidator(new UserValidator());
	}
*/	

	@RequestMapping(value = "/usr/deleteUser")
	public Map<String, Object> deleteUser(@RequestParam Map<String,String> params) {
		return userSrv.deleteUser(params);
	}	
	
	@RequestMapping(value = "/test")
	public Map<String, Object> test() {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("name", "피승현");
		result.put("age", 50);
		return result;
	}
	
	
	
}
