package com.cognizant.authenticationservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthenticationServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationServicesApplication.class, args);
	}

}
