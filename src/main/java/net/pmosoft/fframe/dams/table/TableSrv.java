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
    *                                ExtractMetaTabInfo
    *
    **********************************************************************************/

   public Map<String, Object> selectMetaTabInfoList(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       List<Map<String,Object>> list = null;
       try{
           list = tableDao.selectMetaTabInfoList(params);;
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
	
   public Map<String, Object> selectMetaTabColInfoList(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       List<Map<String,Object>> list = null;
       try{
           list = tableDao.selectMetaTabInfoList(params);;
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
    
    /**********************************************************************************
     *
     *                                  TabColInfo
     *
     **********************************************************************************/

    public Map<String, Object> selectTabColInfoList(Map<String,String> params){
        System.out.println("start TabColInfoSrv selectTabColInfoList");

        System.out.println("params221 searchValue="+params.get("searchValue"));

        Map<String, Object> result = new HashMap<String, Object>();

        List<Map<String,Object>> list = null;
        try{
            list = tableDao.selectTabColInfoList(params);;
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

    public Map<String, Object> saveTabColInfo(Map<String,String> params){


        System.out.println(tableDao.selectTabColInfoCnt(params));

        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, String> errors = new HashMap<String, String>();
        errors = tableValidatorSrv.validateSaveTabColInfo(params);

        System.out.println("11");
        if(errors.size()>0){
            System.out.println("22");

            //model.addAttribute("tbTabColInfo", tbTabColInfo);
            result.put("isSuccess", false);
            result.put("errUserMsg", errors.get("errUserMsg"));
            return result;
        } else {
            System.out.println("33");

            try{
                result.put("isSuccess", true);

                if  (tableDao.selectTabColInfoCnt(params)==0) {
                    tableDao.insertTabColInfo(params);
                    result.put("msg", "입력 되었습니다");
                } else {
                    tableDao.updateTabColInfo(params);
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

    public Map<String, Object> deleteTabColInfo(Map<String,String> params){

        Map<String, Object> result = new HashMap<String, Object>();

        Map<String, String> errors = new HashMap<String, String>();
        errors = tableValidatorSrv.validateDeleteTabColInfo(params);
        if(errors.size()>0){
            //model.addAttribute("tbTabColInfo", tbTabColInfo);
            result.put("isSuccess", false);
            result.put("errUserMsg", errors.get("errUserMsg"));
            System.out.println(result);
            return result;
        } else {
            tableDao.deleteTabColInfo(params);
            result.put("isSuccess", true);
            result.put("msg", "삭제 되었습니다");
            return result;
        }
    }
	
	
	/**********************************************************************************
	 *
	 *                                  TabInfo
	 *
	 **********************************************************************************/

	public Map<String, Object> selectTabInfoList(Map<String,String> params){
		System.out.println("start TabInfoSrv selectTabInfoList");

		System.out.println("params221 searchValue="+params.get("searchValue"));

		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String,Object>> list = null;
		try{
			list = tableDao.selectTabInfoList(params);;
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

	public Map<String, Object> saveTabInfo(Map<String,String> params){


		System.out.println(tableDao.selectTabInfoCnt(params));

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = tableValidatorSrv.validateSaveTabInfo(params);

		System.out.println("11");
		if(errors.size()>0){
			System.out.println("22");

			//model.addAttribute("tbTabInfo", tbTabInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			return result;
		} else {
			System.out.println("33");

			try{
		    	result.put("isSuccess", true);

			    if  (tableDao.selectTabInfoCnt(params)==0) {
			    	tableDao.insertTabInfo(params);
			    	result.put("msg", "입력 되었습니다");
			    } else {
			    	tableDao.updateTabInfo(params);
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

	public Map<String, Object> deleteTabInfo(Map<String,String> params){

		Map<String, Object> result = new HashMap<String, Object>();

		Map<String, String> errors = new HashMap<String, String>();
		errors = tableValidatorSrv.validateDeleteTabInfo(params);
		if(errors.size()>0){
			//model.addAttribute("tbTabInfo", tbTabInfo);
			result.put("isSuccess", false);
			result.put("errUserMsg", errors.get("errUserMsg"));
			System.out.println(result);
			return result;
		} else {
			tableDao.deleteTabInfo(params);
			result.put("isSuccess", true);
			result.put("msg", "삭제 되었습니다");
			return result;
		}
	}

}
