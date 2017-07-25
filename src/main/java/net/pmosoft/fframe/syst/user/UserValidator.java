package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.Map;


public class UserValidator {

	public Map<String, String> validate(Map<String, String> target) {
		
		Map<String, String> errors = new HashMap<String, String>();
		if (target.get("USER_ID").length() < 4 || target.get("USER_ID").length() > 15) {
			errors.put("USER_ID", "유저아이디는 5자리에서 14자리로 입력해 주시기 바랍니다.");
		} 
		return errors;
	}
}
