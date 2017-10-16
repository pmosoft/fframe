package net.pmosoft.fframe.dams.table;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Service
public class TabSrv {

	@Autowired
	private TabDao tabDao;

	@Autowired
	private TabValidatorSrv tabValidatorSrv;


    /**********************************************************************************
    *
    *                                ExtractMetaTab
    *
    **********************************************************************************/

   public Map<String, Object> selectMetaTabList(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       
       try{
           List<Map<String,Object>> list = tabDao.selectMetaTabList(params);;
           result.put("isSuccess", true);
           result.put("data", list);
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }
	
   public Map<String, Object> selectMetaTabColList(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       
       try {
           String step = params.get("step");
           List<Map<String,Object>> list = null;
           
           if(step.equals("1")) {
               tabDao.deleteMetaTabCol(params);
               tabDao.insertMetaTabColList(params);
               list = tabDao.selectMetaTabColList(params);;
           } else if(step.equals("2")){
               list = tabDao.selectCmpTabColList(params);;
           }    
           result.put("isSuccess", true);           
           result.put("data", list);
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }	
   
   public Map<String, Object> selectCmpTabColList(@RequestParam Map<String,String> params) {

       Map<String, Object> result = new HashMap<String, Object>();

       try{
           List<Map<String,Object>> list = tabDao.selectCmpTabColList(params);;
           result.put("isSuccess", true);
           result.put("data", list);
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }    

   public Map<String, Object> insertCmpTabColList(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       
       try{
           tabDao.insertCmpTabColList(params);
           result.put("isSuccess", true);
           result.put("usrMsg", "입력 되었습니다");
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
       }
       
       return result;
   }   
   
    /**********************************************************************************
     *
     *                                  TabCol
     *
     **********************************************************************************/

    public Map<String, Object> selectTabColList(Map<String,String> params){

        Map<String, Object> result = new HashMap<String, Object>();

        try{
            List<Map<String,Object>> list = tabDao.selectTabColList(params);;
            result.put("isSuccess", true);
            result.put("data", list);
        } catch (Exception e){
            result.put("isSuccess", false);
            result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
            result.put("errSysrMsg", e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    public Map<String, Object> saveTabCol(String params){

        Map<String, Object> result = new HashMap<String, Object>();
        return result;
        
    }

    public Map<String, Object> deleteTabCol(Map<String,String> params){

        Map<String, Object> result = new HashMap<String, Object>();
        
        try {
            String data = params.get("data");
            Gson gson = new Gson(); 
            Type type = new TypeToken<List<Map<String,String>>>() {}.getType();
            List<Map<String,String>> listParams  = gson.fromJson(data, type);
            
            Map<String, String> errors = new HashMap<String, String>();
            errors = tabValidatorSrv.validateDeleteTabCol(listParams);
            if(errors.size()>0){
                result.put("isSuccess", false);
                result.put("errUsrMsg", errors.get("errUsrMsg"));
            } else {
                for (int i = 0; i < listParams.size(); i++) {
                    tabDao.deleteTabCol(listParams.get(i));
                }
                result.put("isSuccess", true);
                result.put("usrMsg", "삭제 되었습니다.");
            }
        } catch (Exception e){
            result.put("isSuccess", false);
            result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
            result.put("errSysrMsg", e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
	
	
	/**********************************************************************************
	 *
	 *                                  Tab
	 *
	 **********************************************************************************/

	public Map<String, Object> selectTabList(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		try{
		    List<Map<String,Object>> list = tabDao.selectTabList(params);;
			result.put("isSuccess", true);
			result.put("data", list);
		} catch (Exception e){
			result.put("isSuccess", false);
			result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
			result.put("errSysrMsg", e.getMessage());
			e.printStackTrace();
		}
		return result;
	}

	public Map<String, Object> saveTab(Map<String,String> params){
		
        Map<String, Object> result = new HashMap<String, Object>();

        try{
            String data = params.get("data");
            Gson gson = new Gson(); 
            Type type = new TypeToken<List<Map<String,String>>>() {}.getType();
            List<Map<String,String>> listParams  = gson.fromJson(data, type);
    
            Map<String, String> errors = new HashMap<String, String>();
            errors = tabValidatorSrv.validateSaveTab(params);
            if(errors.size()>0){ 
                result.put("isSuccess", false);
                result.put("errUsrMsg", errors.get("errUsrMsg"));
            } else {
                for (int i = 0; i  < listParams.size(); i++) {
                    if  (tabDao.selectTabCnt(params)==0) {
                        tabDao.insertTab(params);
                    } else {
                        tabDao.updateTab(params);
                    }
                }
                result.put("isSuccess", true);
                result.put("usrMsg", "저장 되었습니다");
            }
        } catch (Exception e){
            result.put("isSuccess", false);
            result.put("errUsrMsg", "시스템 장애가 발생되었습니다.");
            result.put("errSysMsg", e.getMessage());
            e.printStackTrace();
        }            
        return result;		
	}

	public Map<String, Object> deleteTab(Map<String,String> params){
		Map<String, Object> result = new HashMap<String, Object>();
        return result;
	}

}
