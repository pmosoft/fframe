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
public class TabCtrl {

    @Autowired
    private TabSrv tabSrv;

    
    

    /**********************************************************************************
    *
    *                                   Excel Upload
    *
    **********************************************************************************/
    
    /**
     * 엑셀 업로드된 테이블정보를 임시 테이블에 저장한다.
     */
    @RequestMapping(value = "/dams/table/insertExcelTabColList")
    public Map<String, Object> insertExcelTabColList(@RequestParam Map<String,String> params) { 
        return tabSrv.insertExcelTabColList(params);
    }
         
    /**********************************************************************************
    *
    *                                    Meta
    *
    **********************************************************************************/
   
    /*
     * 메타정보의 테이블컬럼정보를 리턴
     * @param DB접속정보 및 DB유저명
     * */
    @RequestMapping(value = "/dams/table/selectMetaTabColList")
    public Map<String, Object> selectMetaTabColList(@RequestParam Map<String,String> params) { 
        System.out.println("selectMetaTabColList");
        return tabSrv.selectMetaTabColList(params);
    }
    
    /*
     * 메타정보의 테이블정보를 리턴
     * @param DB접속정보 및 DB유저명
     * */
    @RequestMapping(value = "/dams/table/selectMetaTabList")
    public Map<String, Object> selectMetaTabList(@RequestParam Map<String,String> params) {
        System.out.println("selectMetaTabList");
        return tabSrv.selectMetaTabList(params);
    }

    /*
     * @param DB접속정보 및 DB유저명
     * */
    @RequestMapping(value = "/dams/table/extLodMetaTabInfoSchema")
    public Map<String, Object> extLodMetaTabInfoSchema(@RequestParam Map<String,String> params) { 
        return tabSrv.selectTabList(params);
    }
 
    /*
     * @param DB접속정보 및 DB유저명
     * */
    @RequestMapping(value = "/dams/table/createTableScript")
    public Map<String, Object> createTableScript(@RequestParam Map<String,String> params) { 
        return tabSrv.selectTabList(params);
    }   
    
    /**********************************************************************************
    *
    *                            ExtMetaTabColListView
    *
    **********************************************************************************/
    
    /*
     * (추출) 메타테이블컬럼정보 조회후 메타임시테이블 삭제, 저장, 조회후 정보 리턴
     *   
     * @param DB접속정보 및 DB유저명
     * */
    @RequestMapping(value = "/dams/table/selectExtractMetaTabColList")
    public Map<String, Object> selectExtractMetaTabColList(@RequestParam Map<String,String> params) { 
        System.out.println("selectMetaTabColList");
        return tabSrv.selectExtractMetaTabColList(params);
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
    *                                    Tab
    *
    **********************************************************************************/

    /*
     * 테이블컬럼정보를 리턴
     * @param 조회 조건값
     * */
    @RequestMapping(value = "/dams/table/selectTabColList")
    public Map<String, Object> selectTabColList(@RequestParam Map<String,String> params) {
        System.out.println(params);
        return tabSrv.selectTabColList(params);
    }
    
    /*
     * 테이블컬럼정보를 저장
     * @param 테이블컬럼정보
     * */
    @RequestMapping(value = "/dams/table/saveTabCol")
    public Map<String, Object> saveTabCol(@RequestParam String params) {
        return tabSrv.saveTabCol(params);
    }
    
    /*
     * 테이블컬럼정보를 삭제
     * @param 조회 조건값
     * */
    @RequestMapping(value = "/dams/table/deleteTabCol")
    public Map<String, Object> deleteTabCol(@RequestParam Map<String,String> params) {
        return tabSrv.deleteTabCol(params);
    }
    
    /*
     * 테이블정보를 리턴
     * @param 조회 조건값
     * */
    @RequestMapping(value = "/dams/table/selectTabList")
    public Map<String, Object> selectTabList(@RequestParam Map<String,String> params) { 
        return tabSrv.selectTabList(params);
    }

    /*
     * 테이블정보를 저장
     * @param 테이블정보
     * */
    @RequestMapping(value = "/dams/table/saveTab")
    public Map<String, Object> saveTab(@RequestParam Map<String,String> params) {
        return tabSrv.saveTab(params);
    }

    /*
     * 테이블정보를 삭제
     * @param 조회 조건값
     * */
    @RequestMapping(value = "/dams/table/deleteTab")
    public Map<String, Object> deleteTab(@RequestParam Map<String,String> params) {
        return tabSrv.deleteTab(params);
    }

    /*
     * 입력테이블의 전컬럼 정보를 리턴
     * @param DB접속정보 및 테이블명 및 rowcnt
     * */
    @RequestMapping(value = "/dams/table/selectTabData")
    public Map<String, Object>  selectTabData(@RequestParam Map<String,String> params){
        return tabSrv.selectTabData(params);
    }
    
    /*
     * 입력쿼리의 기술된 컬럼정보를 리턴
     * @param DB접속정보 및 쿼리 및 rowcnt
     * */
    @RequestMapping(value = "/dams/table/selectQryData")
    public Map<String, Object>  selectQryData(@RequestParam Map<String,String> params){
        return tabSrv.selectQryData(params);
    }
    
    
}
