package net.pmosoft.fframe.dams.code;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 */
@RestController
public class CodeCtrl {

	@Autowired
	private CodeSrv codeSrv;

	/**********************************************************************************
	 *
	 *                                   Code
	 *
	 **********************************************************************************/

	/**
	 * selectcCodeList
	 */
	@RequestMapping(value = "/dams/code/selectCodeList")
	public Map<String, Object> selectCodeList(@RequestParam Map<String,String> params) {
		return codeSrv.selectCodeList(params);
	}

	/**
	 * saveCode
	 */
	@RequestMapping(value = "/dams/code/saveCode")
	public Map<String, Object> saveCode(@RequestParam Map<String,String> params) {
		return codeSrv.saveCode(params);
	}

	/**
	 * deleteCode
	 */
	@RequestMapping(value = "/dams/code/deleteCode")
	public Map<String, Object> deleteCode(@RequestParam Map<String,String> params) {
		return codeSrv.deleteCode(params);
	}

    /**
     * excelCode
     */
    @RequestMapping(value = "/dams/code/excelCode")
    public Map<String, Object> excelCode(@RequestParam Map<String,String> params, HttpServletResponse response) {
        //codeSrv.excelCode(params);
        
        //response.setContentType("Application/Msexcel");
        //response.setHeader("Content-Disposition","attachment;filename=/files/excel/imsi.xls");
        return codeSrv.excelCode(params);
    }
	

    
    /**********************************************************************************
    *
    *                                   CodeReg
    *
    **********************************************************************************/

   /**
    * selectcCodeRegList
    */
   @RequestMapping(value = "/dams/code/selectCodeRegList")
   public Map<String, Object> selectCodeRegList(@RequestParam Map<String,String> params) {
       return codeSrv.selectCodeRegList(params);
   }
   
   @RequestMapping(value = "/dams/code/uploadCodeRegList")
   public void uploadCodeRegList(@RequestParam("uploadFile") ArrayList<MultipartFile> files, HttpServletResponse response){
       codeSrv.uploadCodeRegList(files);
       JSONObject jsonObj = new JSONObject();
       jsonObj.put("success", true);
       jsonObj.put("isSuccess", true);
       
        try {
            response.setContentType("text/plain; charset=UTF-8");
            PrintWriter pw = response.getWriter();
            pw.print(jsonObj);
            pw.flush();
            pw.close();
        } catch (IOException e) {}
      
           //return codeSrv.uploadCodeRegList(files);
   }     
   
    
}
