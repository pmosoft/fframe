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
    *                                ExtractTabCol
    *
    **********************************************************************************/
	
    /**
     * (추출) 입력 DB정보로 접속하여 메타테이블정보를 읽어서 메타임시테이블 삭제후 저장하고 
     * 메타임시테이블 정보를 을 조회한다.
     */
    @RequestMapping(value = "/dams/table/selectMetaTabColList")
    public Map<String, Object> selectMetaTabColList(@RequestParam Map<String,String> params) { 
        System.out.println("selectMetaTabColList");
        return tabSrv.selectMetaTabColList(params);
    }
    
    /**
     * (비교) 메타임시테이블과 컬럼정보 테이블과 비교한 정보를 조회한다.
     */
    @RequestMapping(value = "/dams/table/selectCmpTabColList")
    public Map<String, Object> selectCmpTabColList(@RequestParam Map<String,String> params) { 
        return tabSrv.selectCmpTabColList(params);
    }

    /**
     * (반영) 신규-변경 테이블정보를 반영한다
     */
    @RequestMapping(value = "/dams/table/insertCmpTabColList")
    public Map<String, Object> insertCmpTabColList(@RequestParam Map<String,String> params) { 
        return tabSrv.insertCmpTabColList(params);
    }

    /**********************************************************************************
    *
    *                                ExtractTabCol
    *
    **********************************************************************************/
     
//    /**
//     * selectMetaTabList
//     */
//    @RequestMapping(value = "/dams/table/selectMetaTabList")
//    public Map<String, Object> selectMetaTabList(@RequestParam Map<String,String> params) {
//        System.out.println("selectMetaTabList");
//        return tabSrv.selectMetaTabList(params);
//    }
     
	
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
