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
	 *                                  Pack
	 *
	 **********************************************************************************/

	/**
	 * selectcPackList
	 */
	@RequestMapping(value = "/dams/pack/selectPackList")
	public Map<String, Object> selectPackList(@RequestParam Map<String,String> params) {
		return termSrv.selectPackList(params);
	}

	/**
	 * savePack
	 */
	@RequestMapping(value = "/dams/pack/savePack")
	public Map<String, Object> savePack(@RequestParam Map<String,String> params) {
		return termSrv.savePack(params);
	}

	/**
	 * deletePack
	 */
	@RequestMapping(value = "/dams/pack/deletePack")
	public Map<String, Object> deletePack(@RequestParam Map<String,String> params) {
		return termSrv.deletePack(params);
	}

}
