package net.pmosoft.fframe;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
public class FframeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FframeApplication.class, args);
	}
}
