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
	 *                                  Code
	 *
	 **********************************************************************************/

	public Map<String, Object> selectCodeList(Map<String,String> params){
		System.out.println("start CodeSrv selectCodeList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = codeDao.selectCodeList(params);;
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

	public Map<String, Object> saveCode(Map<String,String> params){


		System.out.println(codeDao.selectCodeCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = codeValidatorSrv.validateSaveCode(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbCode", tbCode);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (codeDao.selectCodeCnt(params)==0) {
			    	codeDao.insertCode(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	codeDao.updateCode(params);
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

	public Map<String, Object> deleteCode(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = codeValidatorSrv.validateDeleteCode(params);
		if(errors.size()>0){
			//model.addAttribute("tbCode", tbCode);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {
			codeDao.deleteCode(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;
		}
	}

}
