package net.pmosoft.fframe.gens.pgm;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.pmosoft.fframe.util.FileUtil;
import net.pmosoft.fframe.util.StringUtil;


public class GensPgmMgr {

    /******************************************
     * 글로벌 프로퍼티
     *****************************************/
    String packBascNm = "net.pmosoft.fframe";                           //회사명
    String prjNm = "fframe";                                            //프로젝트명
    String srcBascPathNm = "c:/fframe/workspace/fframe/src/main";       //소스기본경로
    String javaBascPathNm = srcBascPathNm + "/java/net/pmosoft/fframe"; //자바기본경로
    String webBasePathNm = srcBascPathNm + "/webapp/app";               //웹기본경로
    String tmplBascPathNm = javaBascPathNm + "/gens/pgm/tmpl";          //템플릿기본경로

    /******************************************
     * 입력 파라미터
     *****************************************/
    String tmplCd    = ""; //탬플릿유형(예:grid01)
    String packNm    = ""; //패키지명(예:net.pmosoft.fframe.gens.test)
    String genPackNm = ""; //회사명이 배제된 패키지명(예:gens.test)
    String genPathNm = ""; //회사명이 배제된 폴더명(예:gens/test)
        
    String varNm = ""; //변수명(예:testTmpl)       
    String pgmNm = ""; //파일명(예:TestTmpl)       

    String tmplCdPathNm = ""; //템플릿타입별경로(예:extjs/grid01, spring/restful)    
    String renameTmplNm = ""; //템플릿파일명중변경되어야할명칭(예:Grid01Controoler.js.tmpl <== Grid01)    
    
    /******************************************
     * 기타 파라미터
     *****************************************/
    boolean isFront = false;
    boolean isBack = false;
    
    public static void main(String[] args) {
        GensPgmMgr gensPgmMgr = new GensPgmMgr();

        Map<String, String> params = new HashMap<String, String>();
        params.put("tmplCd", "grid01");
        params.put("packNm", "net.pmosoft.fframe.gens.test");
        params.put("pgmNm" , "testTmpl");
        gensPgmMgr.createPgmFile(params);
    }

    public void createPgmFile(Map<String,String> params){

        /******************************************
         * 글로벌 프로퍼티
         *****************************************/
        packBascNm = "net.pmosoft.fframe";                           //회사명
        prjNm = "fframe";                                            //프로젝트명
        srcBascPathNm = "c:/fframe/workspace/fframe/src/main";       //소스기본경로
        javaBascPathNm = srcBascPathNm + "/java/net/pmosoft/fframe"; //자바기본경로
        webBasePathNm = srcBascPathNm + "/webapp/app";               //웹기본경로
        tmplBascPathNm = javaBascPathNm + "/gens/pgm/tmpl";          //템플릿기본경로
        
        /******************************************
         * 입력 파라미터
         *****************************************/
        tmplCd = params.get("tmplCd");                 //탬플릿유형(예:grid01)
        packNm = params.get("packNm");                 //패키지명(예:net.pmosoft.fframe.gens.test)
        genPackNm = packNm.replace(packBascNm+".",""); //회사명이 배제된 패키지명(예:gens.test) 
        genPathNm = genPackNm.replace(".","/");        //회사명이 배제된 폴더명  (예:gens/test) 
        varNm = params.get("pgmNm");                                       //변수명(예:testTmpl)       
        pgmNm = StringUtil.replaceFirstCharUpperCase(params.get("pgmNm")); //파일명(예:TestTmpl)       

        
        if(tmplCd.equals("grid01")){
                    
            /******************************************
             * Front-End 파일 생성
             *****************************************/
            setFrontBack("front");
            tmplCdPathNm = "extjs/grid01"; renameTmplNm = "Grid01";
            createPgmFile(webBasePathNm); 
            
            /******************************************
             * Back-End 파일 생성
             *****************************************/
            setFrontBack("back");            
            tmplCdPathNm = "spring/restful"; renameTmplNm = "SpringRest";
            createPgmFile(javaBascPathNm);
        }    
    }
 
    private void setFrontBack(String str){
        if(str.equals("front")) {isFront = true; isBack = false; }
        else { isFront = false; isBack = true; }
    }
    public void createPgmFile(String tarBasePathNm){
 
        String tmplPathNm = "";
        String tmplFileNm = "";
 
        String tarPathNm = "";
        String tarFileNm = "";
        
        tmplPathNm = tmplBascPathNm+"/"+tmplCdPathNm;
        tarPathNm = tarBasePathNm +"/"+ genPathNm;
 
        System.out.println("tmplPathNm="+tmplPathNm);
        System.out.println("tarPathNm="+tarPathNm);
            
        File dir = new File(tmplPathNm);
        File[] fileList = dir.listFiles();
 
        for (int i = 0; i < fileList.length; i++) {
            File file = fileList[i];
            tmplFileNm = file.getName();
            //System.out.println("tmplpgmNm="+tmplFileNm);
            tarFileNm = tmplFileNm.replace(renameTmplNm,pgmNm).replace(".tmpl", "");
            //System.out.println("tmplpgmNm="+tmplFileNm);
 
            //System.out.println("tmplPathNm/tmplFileNm="+tmplPathNm+"/"+tmplFileNm);
            //System.out.println("tarPathNm/tarFileNmm="+tarPathNm+"/"+tarFileNm);
            replaceTmplFileToTarPgmFile(tmplPathNm,tmplFileNm,tarPathNm,tarFileNm);
        }
    }
    
    public void replaceTmplFileToTarPgmFile(String inPathNm, String inFileNm, String outPathNm, String outFileNm) {
 
        try {
            
            FileUtil.makeDir(outPathNm);
            FileUtil.fileDelete(outPathNm+"/"+outFileNm);
            
            BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(inPathNm+"/"+inFileNm)));
            BufferedWriter bw = new BufferedWriter(new FileWriter(outPathNm+"/"+outFileNm, true));
 
            String line = "";
            while(((line = br.readLine()) != null)) {
                //System.out.println("line="+line);
                line = exeReplaceRule(line);
                bw.write(line+"\n");
            }
            bw.flush();
            bw.close();           
            br.close();
        } catch (Exception e) {
            System.out.println("e=" + e.getMessage());
        }
    }    
 
    public String exeReplaceRule(String line) {
        if(tmplCd.equals("grid01")){
            if(isFront) line = exeExtjsReplaceRule(line);
            if(isBack)  line = exeSpringRestfulReplaceRule(line);
        }
        return line;
    }    
 
    public String exeExtjsReplaceRule(String line) {
        line = line.replace("$extjsPackNm$",prjNm+"."+genPackNm); //ex:fframe.gens.test.TmplPgmRegView
        line = line.replace("$PgmNm$",pgmNm);                //ex:fframe.gens.test.TmplPgmRegView
        line = line.replace("$restfulPathName$",genPathNm);   //ex:/gens/test 
        
        return line;
    }    

    public String exeSpringRestfulReplaceRule(String line) {
        line = line.replace("$packNm$",packNm);     //ex:fframe.gens.test.TmplPgmRegView
        line = line.replace("$PgmNm$",pgmNm);  //ex:fframe.gens.test.TmplPgmRegView
        line = line.replace("$pgmNm$",varNm);  //ex:TmplPgmRegView tmplPgmRegView = ..
        line = line.replace("$genPathNm$",genPathNm); //ex:fframe.gens.test.TmplPgmRegView
        
        return line;
    }    
}
