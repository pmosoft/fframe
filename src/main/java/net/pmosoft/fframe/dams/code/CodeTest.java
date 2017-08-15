package net.pmosoft.fframe.dams.code;

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
public class CodeTest {

	@Autowired
	private CodeSrv codeSrv;

	@Autowired
	private CodeDao codeDao;


	@Test @Ignore
	public void testCodeInfoCnt() {
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");
		params.put("PKG_FUL_NM", "user");
		codeDao.selectCodeInfoCnt(params);
	}

	@Test @Ignore
	public void testCodeInfoList() {
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchValue", "us");
		//params.put("searchValue", "유저");
		params.put("searchValue", "");
		codeSrv.selectCodeInfoList(params);
		//TermDao.selectCodeInfoList(params);
	}

	@Test @Ignore
	public void testSaveCodeInfo() {

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

		//TermDao.deleteUser(params);

		Map<String, Object> result = codeSrv.saveCodeInfo(params);

		System.out.println(result);
		testCodeInfoList();
	}

	@Test
	public void testDeleteCodeInfo() {
		Map<String, String> params = new HashMap<String, String>();
		params.put("PKG_FUL_NM", "package1");
		codeSrv.deleteCodeInfo(params);
	}

	@Test @Ignore
	public void testInsertCodeInfo() {

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

		codeDao.deleteCodeInfo(params);

		codeDao.insertCodeInfo(params);

		testCodeInfoList();
	}

	@Test @Ignore
	public void testUpdateCodeInfo() {

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

		codeDao.updateCodeInfo(params);

		testCodeInfoList();
	}


}

