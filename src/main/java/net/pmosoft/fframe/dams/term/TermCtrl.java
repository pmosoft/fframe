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
	 *                                  Term
	 *
	 **********************************************************************************/

    /**
     * selectExtTermList
     */
    @RequestMapping(value = "/dams/term/selectExtTermList")
    public Map<String, Object> selectExtTermList(@RequestParam Map<String,String> params) {
        return termSrv.selectExtTermList(params);
    }
	
	/**
	 * selectcTermList
	 */
	@RequestMapping(value = "/dams/term/selectTermList")
	public Map<String, Object> selectTermList(@RequestParam Map<String,String> params) {
		return termSrv.selectTermList(params);
	}
	

	/**
	 * saveTerm
	 */
	@RequestMapping(value = "/dams/term/saveTerm")
	public Map<String, Object> saveTerm(@RequestParam Map<String,String> params) {
		return termSrv.saveTerm(params);
	}

	/**
	 * deleteTerm
	 */
	@RequestMapping(value = "/dams/term/deleteTerm")
	public Map<String, Object> deleteTerm(@RequestParam Map<String,String> params) {
		return termSrv.deleteTerm(params);
	}
	
	
    /**
     * selectcPackInfoList
     */
    @RequestMapping(value = "/dams/pack/selectPackList")
    public Map<String, Object> selectPackInfoList(@RequestParam Map<String,String> params) {
        return termSrv.selectPackInfoList(params);
    }

    /**
     * savePackInfo
     */
    @RequestMapping(value = "/dams/pack/savePack")
    public Map<String, Object> savePackInfo(@RequestParam Map<String,String> params) {
        return termSrv.savePackInfo(params);
    }   

    /**
     * deletePackInfo
     */
    @RequestMapping(value = "/dams/pack/deletePack")
    public Map<String, Object> deletePackInfo(@RequestParam Map<String,String> params) {
        return termSrv.deletePackInfo(params);
    }   
    	
	

}
