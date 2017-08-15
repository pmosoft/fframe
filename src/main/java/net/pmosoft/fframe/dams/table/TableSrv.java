package net.pmosoft.fframe.dams.table;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TableSrv {

	@Autowired
	private TableDao tableDao;

	@Autowired
	private TableValidatorSrv tableValidatorSrv;

	/**********************************************************************************
	 *
	 *                                  TableInfo
	 *
	 **********************************************************************************/

	public Map<String, Object> selectTableInfoList(Map<String,String> params){
		System.out.println("start TableInfoSrv selectTableInfoList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = tableDao.selectTableInfoList(params);;
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

	public Map<String, Object> saveTableInfo(Map<String,String> params){


		System.out.println(tableDao.selectTableInfoCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = tableValidatorSrv.validateSaveTableInfo(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbTableInfo", tbTableInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (tableDao.selectTableInfoCnt(params)==0) {
			    	tableDao.insertTableInfo(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	tableDao.updateTableInfo(params);
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

	public Map<String, Object> deleteTableInfo(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = tableValidatorSrv.validateDeleteTableInfo(params);
		if(errors.size()>0){
			//model.addAttribute("tbTableInfo", tbTableInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {
			tableDao.deleteTableInfo(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;
		}
	}

}
