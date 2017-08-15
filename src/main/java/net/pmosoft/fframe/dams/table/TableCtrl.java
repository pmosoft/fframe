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
	 *                                  TableInfo
	 *
	 **********************************************************************************/

	/**
	 * selectcTableInfoList
	 */
	@RequestMapping(value = "/dams/table/selectTableInfoList")
	public Map<String, Object> selectTableInfoList(@RequestParam Map<String,String> params) { 
		return tableSrv.selectTableInfoList(params);
	}

	/**
	 * saveTableInfo
	 */
	@RequestMapping(value = "/dams/table/saveTableInfo")
	public Map<String, Object> saveTableInfo(@RequestParam Map<String,String> params) {
		return tableSrv.saveTableInfo(params);
	}

	/**
	 * deleteTableInfo
	 */
	@RequestMapping(value = "/dams/table/deleteTableInfo")
	public Map<String, Object> deleteTableInfo(@RequestParam Map<String,String> params) {
		return tableSrv.deleteTableInfo(params);
	}

}
