package net.pmosoft.fframe.dams.term;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
public class TermCtrl {

	@Autowired
	private TermSrv termSrv;

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
		return termSrv.selectPackInfoList(params);
	}

	/**
	 * savePackInfo
	 */
	@RequestMapping(value = "/dams/pack/savePackInfo")
	public Map<String, Object> savePackInfo(@RequestParam Map<String,String> params) {
		return termSrv.savePackInfo(params);
	}

	/**
	 * deletePackInfo
	 */
	@RequestMapping(value = "/dams/pack/deletePackInfo")
	public Map<String, Object> deletePackInfo(@RequestParam Map<String,String> params) {
		return termSrv.deletePackInfo(params);
	}

}
