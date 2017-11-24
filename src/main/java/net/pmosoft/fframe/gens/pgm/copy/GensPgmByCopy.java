package net.pmosoft.fframe.gens.pgm.copy;

import java.util.Map;

public interface GensPgmByCopy {

    /******************************************
     * 1단계 : 입력파라미터 세팅
     *****************************************/
    public String createPgmFile(Map<String,String> params);
 
    /******************************************
     * 2단계 : 복사할 파일들 지정 
     *****************************************/
    public void createPgmFiles();

    /******************************************
     * 3단계 : 타겟 프로그램 리팩토링 생성 
     *****************************************/
    public void replaceSrcPgmToTarPgm(String srcPathNm, String srcFileNm, String tarPathNm, String tarFileNm); 

    /***********************************************
     * 4단계 : 리팩토링 룰  
     ***********************************************/
    public String replaceRule(String line);
    
}


