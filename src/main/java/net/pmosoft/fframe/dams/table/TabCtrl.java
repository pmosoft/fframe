package net.pmosoft.fframe.dams.table;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
public class TabCtrl {

	@Autowired
	private TabSrv tabSrv;

	
    /**********************************************************************************
    *
    *                                ExtractTab
    *
    **********************************************************************************/

   /**
    * selectMetaTabList
    */
   @RequestMapping(value = "/dams/table/selectMetaTabList")
   public Map<String, Object> selectMetaTabList(@RequestParam Map<String,String> params) {
       System.out.println("selectMetaTabList");
       return tabSrv.selectMetaTabList(params);
   }
	
   /**
    * 메타테이블정보를 읽어서 메타임시테이블에 저장하고 메타임시테이블을 조회한다.
    * step 1
    */
   @RequestMapping(value = "/dams/table/selectMetaTabColList")
   public Map<String, Object> selectMetaTabColList(@RequestParam Map<String,String> params) { 
       System.out.println("selectMetaTabColList");
       return tabSrv.selectMetaTabColList(params);
   }

   /**
    * 메타임시테이블과 컬럼정보 테이블과 비교한 정보를 조회한다.
    * extjs에서 store분리 방법 미파악으로 selectMetaTabColList으로 임시적으로 처리
    * step 2
    */
   @RequestMapping(value = "/dams/table/selectCmpTabColList")
   public Map<String, Object> selectCmpTabColList(@RequestParam Map<String,String> params) { 
       System.out.println("selectMetaTabColList");
       return tabSrv.selectMetaTabColList(params);
   }
   

   @RequestMapping(value = "/dams/table/insertCmpTabColList")
   public Map<String, Object> insertCmpTabColList(@RequestParam Map<String,String> params) { 
       return tabSrv.insertCmpTabColList(params);
   }
      
   
	
    /**********************************************************************************
    *
    *                                  TabCol
    *
    **********************************************************************************/

   /**
    * selectcTabColList
    */
   @RequestMapping(value = "/dams/table/selectTabColList")
   public Map<String, Object> selectTabColList(@RequestParam Map<String,String> params) { 
       return tabSrv.selectTabColList(params);
   }

   /**
    * saveTabCol
    */
   @RequestMapping(value = "/dams/table/saveTabCol")
   public Map<String, Object> saveTabCol(@RequestParam String params) {
       return tabSrv.saveTabCol(params);
   }

   /**
    * deleteTabCol
    */
   @RequestMapping(value = "/dams/table/deleteTabCol")
   public Map<String, Object> deleteTabCol(@RequestParam Map<String,String> params) {
       return tabSrv.deleteTabCol(params);
   }
	
	
	/**********************************************************************************
	 *
	 *                                  Tab
	 *
	 **********************************************************************************/

	/**
	 * selectcTabList
	 */
	@RequestMapping(value = "/dams/table/selectTabList")
	public Map<String, Object> selectTabList(@RequestParam Map<String,String> params) { 
		return tabSrv.selectTabList(params);
	}

	/**
	 * saveTab
	 */
	@RequestMapping(value = "/dams/table/saveTab")
	public Map<String, Object> saveTab(@RequestParam Map<String,String> params) {
		return tabSrv.saveTab(params);
	}

	/**
	 * deleteTab
	 */
	@RequestMapping(value = "/dams/table/deleteTab")
	public Map<String, Object> deleteTab(@RequestParam Map<String,String> params) {
		return tabSrv.deleteTab(params);
	}

 	
    /**********************************************************************************
    *
    *                                  Meta
    *
    **********************************************************************************/

   /**
    * extLodMetaTabInfoSchema
    */
   @RequestMapping(value = "/dams/table/extLodMetaTabInfoSchema")
   public Map<String, Object> extLodMetaTabInfoSchema(@RequestParam Map<String,String> params) { 
       return tabSrv.selectTabList(params);
   }

   /**
    * createTableScript
    */
   @RequestMapping(value = "/dams/table/createTableScript")
   public Map<String, Object> createTableScript(@RequestParam Map<String,String> params) { 
       return tabSrv.selectTabList(params);
   }   
	
}
