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
    * selectMetaTabColInfoList
    */
   @RequestMapping(value = "/dams/table/selectMetaTabColInfoList")
   public Map<String, Object> selectMetaTabColInfoList(@RequestParam Map<String,String> params) { 
       System.out.println("selectMetaTabColInfoList");
       return tableSrv.selectMetaTabColInfoList(params);
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
