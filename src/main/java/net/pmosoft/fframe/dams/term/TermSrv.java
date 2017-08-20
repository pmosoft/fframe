package net.pmosoft.fframe.dams.term;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TermSrv {

	@Autowired
	private TermDao termDao;

	@Autowired
	private TermValidatorSrv termValidatorSrv;

	/**********************************************************************************
	 *
	 *                                  Pack
	 *
	 **********************************************************************************/

	public Map<String, Object> selectPackList(Map<String,String> params){
		System.out.println("start PackSrv selectPackList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = termDao.selectPackList(params);;
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

	public Map<String, Object> savePack(Map<String,String> params){


		System.out.println(termDao.selectPackCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = termValidatorSrv.validateSavePack(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbPack", tbPack);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (termDao.selectPackCnt(params)==0) {
			    	termDao.insertPack(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	termDao.updatePack(params);
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

	public Map<String, Object> deletePack(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = termValidatorSrv.validateDeletePack(params);
		if(errors.size()>0){
			//model.addAttribute("tbPack", tbPack);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {
			termDao.deletePack(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;
		}
	}

}
