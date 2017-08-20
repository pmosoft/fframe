package net.pmosoft.fframe.dams.table;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
public class TableCtrl {

	@Autowired
	private TableSrv tableSrv;

	
    /**********************************************************************************
    *
    *                                ExtractTabInfo
    *
    **********************************************************************************/

   /**
    * selectMetaTabInfoList
    */
   @RequestMapping(value = "/dams/table/selectMetaTabInfoList")
   public Map<String, Object> selectMetaTabInfoList(@RequestParam Map<String,String> params) {
       System.out.println("selectMetaTabInfoList");
       return tableSrv.selectMetaTabInfoList(params);
   }
	
   /**
    * 메타테이블정보를 읽어서 메타임시테이블에 저장하고 메타임시테이블을 조회한다.
    * step 1
    */
   @RequestMapping(value = "/dams/table/selectMetaTabColInfoList")
   public Map<String, Object> selectMetaTabColInfoList(@RequestParam Map<String,String> params) { 
       System.out.println("selectMetaTabColInfoList");
       return tableSrv.selectMetaTabColInfoList(params);
   }

   /**
    * 메타임시테이블과 컬럼정보 테이블과 비교한 정보를 조회한다.
    * extjs에서 store분리 방법 미파악으로 selectMetaTabColInfoList으로 임시적으로 처리
    * step 2
    */
   @RequestMapping(value = "/dams/table/selectCmpTabColInfoList")
   public Map<String, Object> selectCmpTabColInfoList(@RequestParam Map<String,String> params) { 
       System.out.println("selectMetaTabColInfoList");
       return tableSrv.selectMetaTabColInfoList(params);
   }
   

   @RequestMapping(value = "/dams/table/insertCmpTabColInfoList")
   public Map<String, Object> insertCmpTabColInfoList(@RequestParam Map<String,String> params) { 
       return tableSrv.insertCmpTabColInfoList(params);
   }
      
   
	
    /**********************************************************************************
    *
    *                                  TabColInfo
    *
    **********************************************************************************/

   /**
    * selectcTabColInfoList
    */
   @RequestMapping(value = "/dams/table/selectTabColInfoList")
   public Map<String, Object> selectTabColInfoList(@RequestParam Map<String,String> params) { 
       return tableSrv.selectTabColInfoList(params);
   }

   /**
    * saveTabColInfo
    */
   @RequestMapping(value = "/dams/table/saveTabColInfo")
   public Map<String, Object> saveTabColInfo(@RequestParam Map<String,String> params) {
       return tableSrv.saveTabColInfo(params);
   }

   /**
    * deleteTabColInfo
    */
   @RequestMapping(value = "/dams/table/deleteTabColInfo")
   public Map<String, Object> deleteTabColInfo(@RequestParam Map<String,String> params) {
       return tableSrv.deleteTabColInfo(params);
   }
	
	
	/**********************************************************************************
	 *
	 *                                  TabInfo
	 *
	 **********************************************************************************/

	/**
	 * selectcTabInfoList
	 */
	@RequestMapping(value = "/dams/table/selectTabInfoList")
	public Map<String, Object> selectTabInfoList(@RequestParam Map<String,String> params) { 
		return tableSrv.selectTabInfoList(params);
	}

	/**
	 * saveTabInfo
	 */
	@RequestMapping(value = "/dams/table/saveTabInfo")
	public Map<String, Object> saveTabInfo(@RequestParam Map<String,String> params) {
		return tableSrv.saveTabInfo(params);
	}

	/**
	 * deleteTabInfo
	 */
	@RequestMapping(value = "/dams/table/deleteTabInfo")
	public Map<String, Object> deleteTabInfo(@RequestParam Map<String,String> params) {
		return tableSrv.deleteTabInfo(params);
	}

}
