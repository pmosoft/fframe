package net.pmosoft.fframe.gens.pgm.copy;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

import net.pmosoft.fframe.comm.util.FileUtil;


public class GensSpringByCopy extends GensCommByCopy {

    public static void main(String[] args) { 
        GensSpringByCopy gensExtjsByCopy = new GensSpringByCopy();

        Map<String, String> params = new HashMap<String, String>();
        params.put("srcPackNm", "net.pmosoft.fframe.gens");
        params.put("srcPgmNm" , "GenPgmByCopy");
        params.put("tarPackNm", "net.pmosoft.fframe.gens");
        params.put("tarPgmNm" , "GenPgmByTmpl");
        
        try {
            gensExtjsByCopy.createPgmFile(params);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    /******************************************
     * 2단계 : 복사할 파일들 지정 
     *****************************************/
    public void createPgmFiles(){

        srcPgmPathNm = javaBascPathNm +"/"+ srcGenPathNm;
        tarPgmPathNm = javaBascPathNm +"/"+ tarGenPathNm;

        System.out.println("srcPgmPathNm = " + srcPgmPathNm );
        System.out.println("tarPgmPathNm = " + tarPgmPathNm );
        
    }

    /***********************************************
     * 4단계 : 리팩토링 룰  
     ***********************************************/
    public String replaceRule(String line) {
//      line = line.replace("$tarPackNm$",tarPackNm);     //ex:fframe.gens.test.TmplPgmRegView
//      line = line.replace("$tarPgmNm$",tarPgmNm);  //ex:fframe.gens.test.TmplPgmRegView
//      line = line.replace("$tarPgmNm$",tarVarNm);  //ex:TmplPgmRegView tmplPgmRegView = ..
//      line = line.replace("$tarGenPathNm$",tarGenPathNm); //ex:fframe.gens.test.TmplPgmRegView
        
        return line;
    }

    
}
