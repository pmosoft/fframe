package net.pmosoft.fframe.dams.code;

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
public class CodeValidatorSrv {

	//String configLocation = "classpath:springJdbcOracle.xml"; // src/main/resources/springJdbcOracle.xml
	//AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLocation);
	//WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(((HttpServletRequest) request).getSession().getServletContext());
	//CodeInfoDao CodeInfoDao = ctx.getBean("CodeInfoDao",CodeInfoDao.class);
    //@Autowired
    //private WebApplicationContext webContext; // WebApplicationContext 주입

    //CodeInfoDao CodeInfoDao = webContext.getBean("CodeInfoDao",CodeInfoDao.class);

	public Map<String, String> validateSaveCodeInfo(Map<String, String> target) {

		System.out.println("validateSaveCodeInfo");

		Map<String, String> errors = new HashMap<String, String>();
		System.out.println("validateSaveCodeInfo11");

//		if (target.get("CodeInfo_ID").length() < 5 || target.get("CodeInfo_ID").length() > 15) {
//			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (target.get("CodeInfo_EMAIL").length() < 5 || target.get("CodeInfo_EMAIL").length() > 15) {
//			errors.put("errUserMsg", "이메일 형식이 아닙니다.");
//		} else if  (target.get("CodeInfo_PW").length() < 5 || target.get("CodeInfo_PW").length() > 15) {
//			errors.put("errUserMsg", "유저암호를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (!target.get("CodeInfo_PW").equals(target.get("CodeInfo_PW2"))) {
//			errors.put("errUserMsg", "암호와 암호확인을 일치시켜 주십시요.");
//		} else if  (target.get("CodeInfo_NM").length() < 5 || target.get("CodeInfo_NM").length() > 15) {
//			errors.put("errUserMsg", "성명을 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		}
		System.out.println("validateSaveCodeInfo55");

		return errors;
	}


	public Map<String, String> validateDeleteCodeInfo(Map<String, String> target) {

		Map<String, String> errors = new HashMap<String, String>();
//		if (target.get("CodeInfo_ID").length() < 5 || target.get("CodeInfo_ID").length() > 15) {
//			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (CodeInfoDao.selectCodeInfoCnt(target)==0) {
//			errors.put("errUserMsg", "아이디가 미존재합니다.");
//		}

		return errors;
	}

}