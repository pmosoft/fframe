package net.pmosoft.fframe.syst.user;


import java.util.HashMap;
import java.util.Map;

import net.pmosoft.fframe.AbstractTest;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class UserTest extends AbstractTest {

//	@Autowired
//	private WebApplicationContext webApplicationContext;
//	private MockMvc mockMvc;
//
//	@Before
//	public void setup() {
//		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();		
//	}
//	@Test
//	public void testUserListCtrl() throws Exception { 
//		 this.mockMvc.perform(get("/"))
//		 .andDo(print())
//		 .andExpect(status().isOk())
//		 .andExpect(model().attributeExists("serverTime"));  
//		
//	}
	
	@Autowired
	private UserSrv userSrv;
	
	@Autowired
	private UserDao userDao;

	
	@Test @Ignore
	public void testUserListDao() { 
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("searchKeyCombo", "USER_ID"); params.put("searchValue", "admin");
		userDao.selectUserList(params);
	}
	
	@Test @Ignore
	public void testUserList() { 
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("searchKeyCombo", "USER_ID"); params.put("searchValue", ""); 
		userSrv.selectUserList(params);
	}

	@Test
	public void testSaveUser() {
		
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("USER_ID"    , "test1"); 
		params.put("USER_EMAIL" , "test1@pmosoft.net"); 
		params.put("USER_PW"    , "test1"); 
		params.put("USER_NM"    , "test1"); 
		params.put("USER_AGE"   , "40");  
		params.put("USE_YN"     , "Y"); 
		params.put("REG_USER_ID", "admin"); 
		params.put("UPD_USER_ID", "admin");
		
		//userSrv.deleteUser(params);

		Map<String, Object> result = userSrv.saveUser(params);

		System.out.println(result);
		//testUserList();
	}
	
	
	@Test @Ignore
	public void testInsertUser() {
		
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("USER_ID"    , "test1"); 
		params.put("USER_EMAIL" , "test1@pmosoft.net"); 
		params.put("USER_PW"    , "test1"); 
		params.put("USER_NM"    , "test1"); 
		params.put("USER_AGE"   , "40"); 
		params.put("USE_YN"     , "Y"); 
		params.put("REG_USER_ID", "admin"); 
		params.put("UPD_USER_ID", "admin");
		
		userSrv.deleteUser(params);

		userSrv.insertUser(params);

		testUserList();
	}

	@Test @Ignore 
	public void testUpdateUser() {
		
		Map<String, String> params = new HashMap<String, String>();
		//params.put("searchKeyCombo", ""); params.put("searchValue", "");		
		params.put("USER_ID"    , "test1"); 
		params.put("USER_EMAIL" , "test1@pmosoft.net"); 
		params.put("USER_PW"    , "test11"); 
		params.put("USER_NM"    , "test11"); 
		params.put("USER_AGE"    , "40"); 
		params.put("USE_YN"     , "Y"); 
		params.put("UPD_USER_ID", "admin");
		
		userSrv.updateUser(params);

		testUserList();
	}
}

