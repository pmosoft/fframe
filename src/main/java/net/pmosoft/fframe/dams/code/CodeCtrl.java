package net.pmosoft.fframe.dams.code;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
public class CodeCtrl {

	@Autowired
	private CodeSrv codeSrv;

	/**********************************************************************************
	 *
	 *                                  CodeInfo
	 *
	 **********************************************************************************/

	/**
	 * selectcCodeInfoList
	 */
	@RequestMapping(value = "/dams/code/selectCodeInfoList")
	public Map<String, Object> selectCodeInfoList(@RequestParam Map<String,String> params) {
		return codeSrv.selectCodeInfoList(params);
	}

	/**
	 * saveCodeInfo
	 */
	@RequestMapping(value = "/dams/code/saveCodeInfo")
	public Map<String, Object> saveCodeInfo(@RequestParam Map<String,String> params) {
		return codeSrv.saveCodeInfo(params);
	}

	/**
	 * deleteCodeInfo
	 */
	@RequestMapping(value = "/dams/code/deleteCodeInfo")
	public Map<String, Object> deleteCodeInfo(@RequestParam Map<String,String> params) {
		return codeSrv.deleteCodeInfo(params);
	}

}
