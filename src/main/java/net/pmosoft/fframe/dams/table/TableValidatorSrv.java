package net.pmosoft.fframe.dams.table;

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
public class TableValidatorSrv {

	//String configLocation = "classpath:springJdbcOracle.xml"; // src/main/resources/springJdbcOracle.xml
	//AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLocation);
	//WebApplicationContext wac = WebApplicationContextUtils.getWebApplicationContext(((HttpServletRequest) request).getSession().getServletContext());
	//TabInfoDao TabInfoDao = ctx.getBean("TabInfoDao",TabInfoDao.class);
    //@Autowired
    //private WebApplicationContext webContext; // WebApplicationContext 주입

    //TabInfoDao TabInfoDao = webContext.getBean("TabInfoDao",TabInfoDao.class);

    /**********************************************************************************
    *
    *                                  TabColInfo
    *
    **********************************************************************************/
    public Map<String, String> validateSaveTabColInfo(Map<String, String> target) {

        System.out.println("validateSaveTabColInfo");

        Map<String, String> errors = new HashMap<String, String>();
        System.out.println("validateSaveTabColInfo11");

//      if (target.get("TabColInfo_ID").length() < 5 || target.get("TabColInfo_ID").length() > 15) {
//          errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//      } else if  (target.get("TabColInfo_EMAIL").length() < 5 || target.get("TabColInfo_EMAIL").length() > 15) {
//          errors.put("errUserMsg", "이메일 형식이 아닙니다.");
//      } else if  (target.get("TabColInfo_PW").length() < 5 || target.get("TabColInfo_PW").length() > 15) {
//          errors.put("errUserMsg", "유저암호를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//      } else if  (!target.get("TabColInfo_PW").equals(target.get("TabColInfo_PW2"))) {
//          errors.put("errUserMsg", "암호와 암호확인을 일치시켜 주십시요.");
//      } else if  (target.get("TabColInfo_NM").length() < 5 || target.get("TabColInfo_NM").length() > 15) {
//          errors.put("errUserMsg", "성명을 5자리에서 14자리로 입력해 주시기 바랍니다.");
//      }
        System.out.println("validateSaveTabColInfo55");

        return errors;
    }


    public Map<String, String> validateDeleteTabColInfo(Map<String, String> target) {

        Map<String, String> errors = new HashMap<String, String>();
//      if (target.get("TabColInfo_ID").length() < 5 || target.get("TabColInfo_ID").length() > 15) {
//          errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//      } else if  (TabColInfoDao.selectTabColInfoCnt(target)==0) {
//          errors.put("errUserMsg", "아이디가 미존재합니다.");
//      }

        return errors;
    }
    
    /**********************************************************************************
    *
    *                                  TabInfo
    *
    **********************************************************************************/
	public Map<String, String> validateSaveTabInfo(Map<String, String> target) {

		System.out.println("validateSaveTabInfo");

		Map<String, String> errors = new HashMap<String, String>();
		System.out.println("validateSaveTabInfo11");

//		if (target.get("TabInfo_ID").length() < 5 || target.get("TabInfo_ID").length() > 15) {
//			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (target.get("TabInfo_EMAIL").length() < 5 || target.get("TabInfo_EMAIL").length() > 15) {
//			errors.put("errUserMsg", "이메일 형식이 아닙니다.");
//		} else if  (target.get("TabInfo_PW").length() < 5 || target.get("TabInfo_PW").length() > 15) {
//			errors.put("errUserMsg", "유저암호를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (!target.get("TabInfo_PW").equals(target.get("TabInfo_PW2"))) {
//			errors.put("errUserMsg", "암호와 암호확인을 일치시켜 주십시요.");
//		} else if  (target.get("TabInfo_NM").length() < 5 || target.get("TabInfo_NM").length() > 15) {
//			errors.put("errUserMsg", "성명을 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		}
		System.out.println("validateSaveTabInfo55");

		return errors;
	}


	public Map<String, String> validateDeleteTabInfo(Map<String, String> target) {

		Map<String, String> errors = new HashMap<String, String>();
//		if (target.get("TabInfo_ID").length() < 5 || target.get("TabInfo_ID").length() > 15) {
//			errors.put("errUserMsg", "유저아이디를 5자리에서 14자리로 입력해 주시기 바랍니다.");
//		} else if  (TabInfoDao.selectTabInfoCnt(target)==0) {
//			errors.put("errUserMsg", "아이디가 미존재합니다.");
//		}

		return errors;
	}

}
