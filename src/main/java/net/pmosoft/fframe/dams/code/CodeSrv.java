package net.pmosoft.fframe.dams.code;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CodeSrv {

	@Autowired
	private CodeDao codeDao;

	@Autowired
	private CodeValidatorSrv codeValidatorSrv;

	/**********************************************************************************
	 *
	 *                                  CodeInfo
	 *
	 **********************************************************************************/

	public Map<String, Object> selectCodeInfoList(Map<String,String> params){
		System.out.println("start CodeInfoSrv selectCodeInfoList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = codeDao.selectCodeInfoList(params);;
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

	public Map<String, Object> saveCodeInfo(Map<String,String> params){


		System.out.println(codeDao.selectCodeInfoCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = codeValidatorSrv.validateSaveCodeInfo(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbCodeInfo", tbCodeInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (codeDao.selectCodeInfoCnt(params)==0) {
			    	codeDao.insertCodeInfo(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	codeDao.updateCodeInfo(params);
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

	public Map<String, Object> deleteCodeInfo(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = codeValidatorSrv.validateDeleteCodeInfo(params);
		if(errors.size()>0){
			//model.addAttribute("tbCodeInfo", tbCodeInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {
			codeDao.deleteCodeInfo(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;
		}
	}

}
