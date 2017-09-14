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
       List<Map<String,Object>> list = null;
       try{
           list = tabDao.selectMetaTabList(params);;
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

       System.out.println("SRV selectMetaTabColList");
       
       Map<String, Object> result = new HashMap<String, Object>();
       List<Map<String,Object>> list = null;
       
       String step = params.get("step");

       
       try{
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
       List<Map<String,Object>> list = null;
       try{
           list = tabDao.selectCmpTabColList(params);;
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
           result.put("msg", "입력 되었습니다");
       } catch (Exception e){
           e.printStackTrace();
           result.put("errUsrMsg", "시스템 장애가 발생되었습니다.");
           //result.put("errSysMsg", e.toString());
       }
       return result;
   }   
   
    /**********************************************************************************
     *
     *                                  TabCol
     *
     **********************************************************************************/

    public Map<String, Object> selectTabColList(Map<String,String> params){
        System.out.println("start TabColSrv selectTabColList");

        System.out.println("params433355 searchValue="+params.get("searchValue"));

        Map<String, Object> result = new HashMap<String, Object>();

        List<Map<String,Object>> list = null;
        try{
            list = tabDao.selectTabColList(params);;
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


        System.out.println("params="+params);

        Map<String, Object> result = new HashMap<String, Object>();

//        Map<String, String> errors = new HashMap<String, String>();
//        errors = tabValidatorSrv.validateSaveTabCol(params);
//
//        System.out.println("11");
//        if(errors.size()>0){
//            System.out.println("22");
//
//            //model.addAttribute("tbTabCol", tbTabCol);
//            result.put("isSuccess", false);
//            result.put("errUsrMsg", errors.get("errUsrMsg"));
//            return result;
//        } else {
//            System.out.println("33");
//
//            try{
//                result.put("isSuccess", true);
//
//                if  (tabDao.selectTabColCnt(params)==0) {
//                    tabDao.insertTabCol(params);
//                    result.put("msg", "입력 되었습니다");
//                } else {
//                    tabDao.updateTabCol(params);
//                    result.put("msg", "갱신 되었습니다");
//                }
//            } catch (Exception e){
//                e.printStackTrace();
//                result.put("errUsrMsg", "시스템 장애가 발생되었습니다.");
//                //result.put("errSysMsg", e.toString());
//            }
//            return result;
//        }
        
        return result;
        
    }

    public Map<String, Object> deleteTabCol(Map<String,String> params){

        System.out.println("params="+params);
        System.out.println("params433355 searchValue="+params.get("data"));

        String data = params.get("data");
        
        Gson gson = new Gson(); 
        Type type = new TypeToken<List<Map<String,String>>>() {}.getType();

        List<Map<String,String>> listParams  = gson.fromJson(data, type);

        //System.out.println(listParams);
        System.out.println("listParams.size()="+listParams.size());
        
        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, String> errors = new HashMap<String, String>();
        errors = tabValidatorSrv.validateDeleteTabCol(listParams);
        if(errors.size()>0){
            //model.addAttribute("tbTabCol", tbTabCol);
            result.put("isSuccess", false);
            result.put("errUsrMsg", errors.get("errUsrMsg"));
            System.out.println(result);
            return result;
        } else {
            
            for (int i = 0; i < listParams.size(); i++) {
                tabDao.deleteTabCol(listParams.get(i));
            } 
            
            
            result.put("isSuccess", true);
            result.put("msg", "삭제 되었습니다");
            return result;
        }

    }
	
	
	/**********************************************************************************
	 *
	 *                                  Tab
	 *
	 **********************************************************************************/

	public Map<String, Object> selectTabList(Map<String,String> params){
		System.out.println("start TabSrv selectTabList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = tabDao.selectTabList(params);;
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


		System.out.println(tabDao.selectTabCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = tabValidatorSrv.validateSaveTab(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbTab", tbTab);
			result.put("isSuccess", false);
			result.put("errUsrMsg", errors.get("errUsrMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (tabDao.selectTabCnt(params)==0) {
			    	tabDao.insertTab(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	tabDao.updateTab(params);
			    	result.put("msg", "갱신 되었습니다");
			    }
			} catch (Exception e){
				e.printStackTrace();
				result.put("errUsrMsg", "시스템 장애가 발생되었습니다.");
				//result.put("errSysMsg", e.toString());
			}
			return result;
		}
	}

	public Map<String, Object> deleteTab(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

//		Map<String, String> errors = new HashMap<String, String>();
//		errors = tabValidatorSrv.validateDeleteTab(params);
//		if(errors.size()>0){
//			//model.addAttribute("tbTab", tbTab);
//			result.put("isSuccess", false);
//			result.put("errUsrMsg", errors.get("errUsrMsg"));
//			System.out.println(result);
//			return result;
//		} else {
//			tabDao.deleteTab(params);
//			result.put("isSuccess", true);
//			result.put("msg", "삭제 되었습니다");
//			return result;
//		}
      return result;

	}

}
