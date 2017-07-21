package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
		
		System.out.println("params111 searchKeyCombo="+params.get("searchKeyCombo"));
		System.out.println("params221 searchValue="+params.get("searchValue"));
		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String,Object>> list = null;
		try{
			list = userSrv.selectUserList(params);
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
