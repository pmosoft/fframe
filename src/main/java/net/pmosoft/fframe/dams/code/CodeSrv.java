package net.pmosoft.fframe.dams.code;

import java.io.IOException;
import java.lang.reflect.Type;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.pmosoft.fframe.util.ExcelUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;


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

    public Map<String, Object> excelCode(Map<String,String> params){

        String data = params.get("data");
        System.out.println("data="+data);
        
        Gson gson = new Gson();
        
        Type type = new TypeToken<List<Map<String,String>>>() {}.getType();

        List<Map<String,String>> listParams  = gson.fromJson(data, type);
        System.out.println(listParams);
        ExcelUtil excelDown = new ExcelUtil();
        try {
            excelDown.downListToExcel(listParams,"d:/imsi.xls");
            Runtime run = Runtime.getRuntime ();
            run.exec ("cmd /c start excel.exe d:/imsi.xls");
        } catch (IOException e) {    
        } catch (SQLException e) { e.printStackTrace(); }
        
        Map<String, Object> result = new HashMap<String, Object>();
        
        result.put("isSuccess", true);
        return result;

    }
    
    /**********************************************************************************
    *
    *                                  CodeReg
    *
    **********************************************************************************/

   public Map<String, Object> selectCodeRegList(Map<String,String> params){
       System.out.println("start CodeSrv selectCodeRegList");

       System.out.println("params221 searchValue="+params.get("searchValue"));

       Map<String, Object> result = new HashMap<String, Object>();

       List<Map<String,Object>> list = null;
       try{
           list = codeDao.selectCodeRegList(params);;
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

    
    
    
	
}
