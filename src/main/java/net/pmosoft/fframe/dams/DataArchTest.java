package net.pmosoft.fframe.dams;

import java.util.HashMap;
import java.util.Map;

import net.pmosoft.fframe.AbstractTest;
import net.pmosoft.fframe.FframeApplication;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = FframeApplication.class)
public class DataArchTest {

	@Autowired
	private DataArchSrv dataArchSrv;
	
	@Autowired
	private DataArchDao dataArchDao;

	
	@Test @Ignore
	public void testPackInfoCnt() { 
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("PKG_FUL_NM", "user");
		dataArchDao.selectPackInfoCnt(params);
	} 
	
	@Test @Ignore
	public void testPackInfoList() { 
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchValue", "us");
		//params.put("searchValue", "유저");
		params.put("searchValue", "");
		dataArchSrv.selectPackInfoList(params);
		//dataArchDao.selectPackInfoList(params);
	}

	@Test @Ignore
	public void testSavePackInfo() {
		
		Map<String, String> params = new HashMap<String, String>();
		params.put("PKG_FUL_NM", "package1");                
		params.put("PKG2_NM"   , "pk");                
		params.put("PKG3_NM"   , "pkg");                
		params.put("PKG4_NM"   , "pack");                
		params.put("PKG_HNM"   , "패키지");                
		params.put("PKG_DESC"  , "패키지4");                
		params.put("USE_YN"     , "Y");                 
		params.put("REG_USR_ID", "admin");             
		params.put("UPD_USR_ID", "admin");             		
		
		//dataArchDao.deleteUser(params);

		Map<String, Object> result = dataArchSrv.savePackInfo(params);

		System.out.println(result);
		testPackInfoList();
	}
	
	@Test
	public void testDeletePackInfo() { 
		Map<String, String> params = new HashMap<String, String>();
		params.put("PKG_FUL_NM", "package1");
		dataArchSrv.deletePackInfo(params);
	}
	
	@Test @Ignore
	public void testInsertPackInfo() {
		
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("PKG_FUL_NM", "package");                
		params.put("PKG2_NM"   , "pk");                
		params.put("PKG3_NM"   , "pkg");                
		params.put("PKG4_NM"   , "pack");                
		params.put("PKG_HNM"   , "패키지");                
		params.put("PKG_DESC"  , "패키지");                
		params.put("USE_YN"     , "Y");                 
		params.put("REG_USR_ID", "admin");             
		params.put("UPD_USR_ID", "admin");             		
		
		dataArchDao.deletePackInfo(params);

		dataArchDao.insertPackInfo(params);

		testPackInfoList();
	}

	@Test @Ignore 
	public void testUpdatePackInfo() {
		
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("PKG_FUL_NM", "package");                
		params.put("PKG2_NM"   , "pk");                
		params.put("PKG3_NM"   , "pkg");                
		params.put("PKG4_NM"   , "pack");                
		params.put("PKG_HNM"   , "패키지");                
		params.put("PKG_DESC"  , "패키지2");                
		params.put("USE_YN"     , "Y");                 
		params.put("REG_USR_ID", "admin");             
		params.put("UPD_USR_ID", "admin");             		
		
		dataArchDao.updatePackInfo(params);

		testPackInfoList();
	}
	
	
}

