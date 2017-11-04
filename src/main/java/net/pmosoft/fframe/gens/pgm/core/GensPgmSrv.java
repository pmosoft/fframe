package net.pmosoft.fframe.gens.pgm.core;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;


@Service
public class GensPgmSrv {

//	@Autowired
//	private GensPgmDao gensPgmDao;

//	@Autowired
//	private GensPgmValidatorSrv gensPgmValidatorSrv;


   public Map<String, Object> genPgmByTmpl(Map<String,String> params){

       Map<String, Object> result = new HashMap<String, Object>();

       try{
           
           GensPgmByTmpl gensPgmByTmpl = new GensPgmByTmpl();
           gensPgmByTmpl.createPgmFile(params);
           result.put("isSuccess", true);
           result.put("usrMsg", "정상 처리되었습니다.");
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }

   public Map<String, Object> genPgmByCopy(Map<String,String> params){
       //System.out.println(params);

       Map<String, Object> result = new HashMap<String, Object>();
       try{
           
           GensPgmByCopy gensPgmByCopy = new GensPgmByCopy();
           String retMsg = gensPgmByCopy.createPgmFile(params);
           
           System.out.println(retMsg);
           
           result.put("isSuccess", true);
           result.put("usrMsg", "정상 처리되었습니다.");
           result.put("retMsg", retMsg);
       } catch (Exception e){
           result.put("isSuccess", false);
           result.put("errUsrMsg", "시스템 장애가 발생하였습니다");
           result.put("errSysrMsg", e.getMessage());
           e.printStackTrace();
       }
       return result;
   }   
}
