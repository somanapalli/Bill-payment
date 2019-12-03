package com.cognizant.authenticationservices.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.authenticationservices.bean.User;
import com.cognizant.authenticationservices.bean.Vendor;
import com.cognizant.authenticationservices.repository.UserRepository;
import com.cognizant.authenticationservices.repository.VendorRepository;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

	@Autowired
	UserRepository UserRepository;

	@Autowired
	VendorRepository vendorRepository;
	
	@GetMapping("/authenticate")
	public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
		LOGGER.info("start of auth");

		Map<String, String> map = new HashMap<String, String>();
		map.put("token", generateJwt(getUser(authHeader)));

		String userid = getUser(authHeader);
		map.put("username", userid);
		
		User user = UserRepository.findByUserid(userid);
		Vendor vendor = vendorRepository.findByUname(userid);
		
		
		if(user!=null){
			String role = user.getRoles().get(0).getName();	
			String firstname = user.getFirstName();
			String lastname = user.getLastName();
			map.put("role", role);
			map.put("firstname", firstname);
			map.put("lastname", lastname);

			LOGGER.info("END OF AUTH FUNCTION");
		}
		
		if(user==null){
			String role = vendor.getRoles().get(0).getName();	
			map.put("role", role);
			LOGGER.info("END OF AUTH FUNCTION");
		}
		
		return map;
		
		
				
		//Vendor vendor = VendorRepository.findByUname(userid);
		
		//String role1 = vendor.getRoles().get(0).getName();
		//String name = vendor.getName();
		//map.put("role1", role1);
		//map.put("name", name);
		
//		String role = user.getRoles().get(0).getName();
//		String firstname = user.getFirstName();
//		String lastname = user.getLastName();
//		map.put("role", role);
//		map.put("firstname", firstname);
//		map.put("lastname", lastname);
//		LOGGER.info("END OF AUTH FUNCTION");
//		return map;
		
	}

	@GetMapping ("/hello")
	public String hello(){
		return "hello";
	}
	
	
	private String getUser(String authHeader) {
		String user = new String(Base64.getDecoder().decode(authHeader.substring(6)));
		user = user.substring(0, user.indexOf(":"));
		LOGGER.info(user);
		return user;
	}

	private String generateJwt(String user) {
		JwtBuilder builder = Jwts.builder();
		builder.setSubject(user);

		builder.setIssuedAt(new Date());

		builder.setExpiration(new Date((new Date()).getTime() + 1200000));
		builder.signWith(SignatureAlgorithm.HS256, "secretkey");

		String token = builder.compact();
		LOGGER.info(token);
		return token;
	}
}
