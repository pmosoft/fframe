package net.pmosoft.pony.crawling;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.*;

public class SeleniumTest01 {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        test02();
    }

    static void test02(){
        
        //System.setProperty("webdriver.firefox.marionette","C:\\geckodriver.exe");
        //WebDriver driver = new FirefoxDriver();
        //comment the above 2 lines and uncomment below 2 lines to use Chrome
        String path = System.getProperty("user.dir"); // current path of project
        System.out.println("path="+path);

        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS); //응답시간 5초설정
        
        String baseUrl = "https://www.wishket.com/project/";
        driver.get(baseUrl);

        //System.out.println(driver.getPageSource());
        String pageSource = driver.getPageSource();
        if(pageSource.contains("상주하여")) {
            System.out.println("ok");
        } else 
            System.out.println("no");
        driver.close();
        
    }
    
    static void test01(){
        WebDriver driver;
        String Title = null;
        String URL = null;
        String alertText = "";

        System.setProperty("webdriver.chrome.driver", "d:\\chromedriver.exe"); //크롬 드라이버 파일 경로설정
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); //응답시간 5초설정
        driver.get("http://www.naver.com");  //접속할 사이트
    }
    
}
