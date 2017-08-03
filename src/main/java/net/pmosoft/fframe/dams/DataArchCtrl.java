package net.pmosoft.fframe.dams;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
public class DataArchCtrl {

	@Autowired
	private DataArchSrv dataArchSrv;

	/**********************************************************************************
	 *                                  
	 *                                  PackInfo
	 *                                  
	 **********************************************************************************/
	
	/**
	 * selectcPackInfoList
	 */
	@RequestMapping(value = "/dams/pack/selectPackInfoList")
	public Map<String, Object> selectPackInfoList(@RequestParam Map<String,String> params) {
		return dataArchSrv.selectPackInfoList(params);
	}

	/**
	 * savePackInfo
	 */
	@RequestMapping(value = "/dams/pack/savePackInfo")
	public Map<String, Object> savePackInfo(@RequestParam Map<String,String> params) {
		return dataArchSrv.savePackInfo(params);
	}	

	/**
	 * deletePackInfo
	 */
	@RequestMapping(value = "/dams/pack/deletePackInfo")
	public Map<String, Object> deletePackInfo(@RequestParam Map<String,String> params) {
		return dataArchSrv.deletePackInfo(params);
	}	
	
}
