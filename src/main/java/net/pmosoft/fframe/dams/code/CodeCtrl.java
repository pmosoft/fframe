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

	/**
	 * selectcCodeList
	 */
	@RequestMapping(value = "/dams/code/selectCodeList")
	public Map<String, Object> selectCodeList(@RequestParam Map<String,String> params) {
		return codeSrv.selectCodeList(params);
	}

    /**
     * selectcCodeRegList
     */
    @RequestMapping(value = "/dams/code/selectCodeRegList")
    public Map<String, Object> selectCodeRegList(@RequestParam Map<String, String> params) {
        return codeSrv.selectCodeRegList(params);
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
   
    
}
