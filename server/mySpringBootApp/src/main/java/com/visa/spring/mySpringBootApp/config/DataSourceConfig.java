package com.visa.spring.mySpringBootApp.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
public class DataSourceConfig {

	@Value("${spring.datasource.url}")
	private String datasourceURL;

	@Bean
	public DataSource dataSource() {
		HikariConfig cpConfig = new HikariConfig();
		cpConfig.setJdbcUrl(datasourceURL);
		return new HikariDataSource(cpConfig);

	}
}
