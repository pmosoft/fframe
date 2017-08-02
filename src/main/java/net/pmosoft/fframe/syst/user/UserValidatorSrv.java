package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;

//@SpringBootConfiguration
//(classes=net.pmosoft.fframe.FframeApplication.class)
@WebAppConfiguration // 웹 컨텍스트 테스트 활성화

@Service
public class UserValidatorSrv {

	@Autowired
	private UserDao userDao;

	//String configLocation = "classpath:springJdbcOracle.xml"; // src/main/resources/springJdbcOracle.xml
	//AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLocation);
	//WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(((HttpServletRequest) request).getSession().getServletContext());	
	//UserDao userDao = ctx.getBean("UserDao",UserDao.class);
    //@Autowired
    //private WebApplicationContext webContext; // WebApplicationContext 주입
 	
    //UserDao userDao = webContext.getBean("UserDao",UserDao.class);
	
	public Map<String, String> validateSaveUser(Map<String, String> target) {

		
		Map<String, String> errors = new HashMap<String, String>();
		if (target.get("USER_ID").length() < 5 || target.get("USER_ID").length() > 15) {
			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
		} else if  (target.get("USER_EMAIL").length() < 5 || target.get("USER_EMAIL").length() > 15) {
			errors.put("errUserMsg", "이메일 형식이 아닙니다.");
		} else if  (target.get("USER_PW").length() < 5 || target.get("USER_PW").length() > 15) {
			errors.put("errUserMsg", "유저암호를 5자리에서 14자리로 입력해 주시기 바랍니다.");
		} else if  (!target.get("USER_PW").equals(target.get("USER_PW2"))) {
			errors.put("errUserMsg", "암호와 암호확인을 일치시켜 주십시요.");
		} else if  (target.get("USER_NM").length() < 5 || target.get("USER_NM").length() > 15) {
			errors.put("errUserMsg", "성명을 5자리에서 14자리로 입력해 주시기 바랍니다.");
		}
		return errors;
	}
	
	
	public Map<String, String> validateDeleteUser(Map<String, String> target) {
		
		Map<String, String> errors = new HashMap<String, String>();
		if (target.get("USER_ID").length() < 5 || target.get("USER_ID").length() > 15) {
			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
		} else if  (userDao.selectUserCnt(target)==0) {
			errors.put("errUserMsg", "아이디가 미존재합니다.");
		}	
			
		return errors;
	}
	
}
