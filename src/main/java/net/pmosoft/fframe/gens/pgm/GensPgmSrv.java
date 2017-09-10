package net.pmosoft.fframe.gens.pgm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;


@Service
public class GensPgmSrv {

	@Autowired
	private GensPgmDao gensPgmDao;

//	@Autowired
//	private GensPgmValidatorSrv gensPgmValidatorSrv;


   public Map<String, Object> genPgm(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();
       List<Map<String,Object>> list = null;
       try{
//           list = gensPgmDao.selectMetaGensPgmList(params);;
           result.put("isSuccess", true);
           result.put("data", list);
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUserMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }
	
}
