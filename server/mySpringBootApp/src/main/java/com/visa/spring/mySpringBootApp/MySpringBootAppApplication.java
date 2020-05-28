//package com.visa.spring.mySpringBootApp;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//
//@SpringBootApplication
//public class MySpringBootAppApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(MySpringBootAppApplication.class, args);
//	}
//
//}



package com.visa.spring.mySpringBootApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

//@ComponentScan("com.visa.spring")
@SpringBootApplication
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class MySpringBootAppApplication  extends SpringBootServletInitializer {

        public static void main(String[] args) {
                SpringApplication.run(MySpringBootAppApplication.class, args);
        }
        
        @Override
          protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
              return builder.sources(MySpringBootAppApplication.class);
          }

}