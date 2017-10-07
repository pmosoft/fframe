package net.pmosoft.fframe.dams.code;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.pmosoft.fframe.comm.App;
import net.pmosoft.fframe.comm.util.ExcelUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;


@Service
public class CodeSrv {

	@Autowired
	private CodeDao codeDao;

	@Autowired
	private CodeValidatorSrv codeValidatorSrv;

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

    public Map<String, Object> selectCodeRegList(Map<String, String> params) {
        System.out.println("start CodeSrv selectCodeRegList");

        System.out.println("params221 searchValue=" + params.get("searchValue"));

        Map<String, Object> result = new HashMap<String, Object>();

        List<Map<String, Object>> list = null;
        try {
            list = codeDao.selectCodeRegList(params);
            result.put("isSuccess", true);
            result.put("data", list);
        } catch (Exception e) {
            result.put("isSuccess", false);
            result.put("errUserMsg", "시스템 장애가 발생하였습니다");
            result.put("errSysrMsg", e.getMessage());
            e.printStackTrace();
        }
        return result;
    }	
	
	public Map<String, Object> saveCode(Map<String,String> params){

        String data = params.get("data");
        Gson gson = new Gson(); 
        Type type = new TypeToken<List<Map<String,String>>>() {}.getType();
        List<Map<String,String>> listParams  = gson.fromJson(data, type);

        System.out.println("listParams="+listParams);
        System.out.println("listParams.size()="+listParams.size());
        
        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, String> errors = new HashMap<String, String>();
        errors = codeValidatorSrv.validateSaveCode(listParams);
        if(errors.size()>0){ 
            //model.addAttribute("tbTabCol", tbTabCol);
            result.put("isSuccess", false);
            result.put("errUsrMsg", errors.get("errUsrMsg"));
            System.out.println(result);
            return result;
        } else {
            
           try{
                result.put("isSuccess", true);
                for (int i = 0; i  < listParams.size(); i++) {
                    if  (codeDao.selectCodeCnt(listParams.get(i))==0) {
                        codeDao.insertCode(listParams.get(i));
                    } else {
                        codeDao.updateCode(listParams.get(i));
                    }
                }    
            } catch (Exception e){
                e.printStackTrace();
                result.put("errUserMsg", "시스템 장애가 발생되었습니다.");
                //result.put("errSysMsg", e.toString());
            }            
            
            result.put("isSuccess", true);
            result.put("msg", "저장 되었습니다");
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
