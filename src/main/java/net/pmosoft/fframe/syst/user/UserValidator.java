package net.pmosoft.fframe.syst.user;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

//@SpringBootConfiguration
//(classes=net.pmosoft.fframe.FframeApplication.class)
@WebAppConfiguration // 웹 컨텍스트 테스트 활성화
public class UserValidator {

	//@Autowired
	//private UserDao userDao;

	//String configLocation = "classpath:springJdbcOracle.xml"; // src/main/resources/springJdbcOracle.xml
	//AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLocation);
	//WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(((HttpServletRequest) request).getSession().getServletContext());	
	//UserDao userDao = ctx.getBean("UserDao",UserDao.class);
    @Autowired
    private WebApplicationContext webContext; // WebApplicationContext 주입
 	
    UserDao userDao = webContext.getBean("UserDao",UserDao.class);
	
	public Map<String, String> validate(Map<String, String> target) {

		
		Map<String, String> errors = new HashMap<String, String>();
		if (target.get("USER_ID").length() < 5 || target.get("USER_ID").length() > 15) {
			errors.put("errUserMsg", "유저아이디는 5자리에서 14자리로 입력해 주시기 바랍니다.");
		} else if  (userDao.selectUserCnt(target)>0) {
			errors.put("errUserMsg", "이미 존재하는 아이디가 있습니다.");
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
}
