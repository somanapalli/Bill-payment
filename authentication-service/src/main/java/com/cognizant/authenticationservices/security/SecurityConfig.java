package com.cognizant.authenticationservices.security;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.cognizant.authenticationservices.service.AppUserDetailsService;
import com.cognizant.authenticationservices.service.AppVendorDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@Autowired
	AppVendorDetailsService appVendorDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
		auth.userDetailsService(appVendorDetailsService).passwordEncoder(passwordEncoder());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		LOGGER.info("Start");
		return new BCryptPasswordEncoder();
	}

	@SuppressWarnings("rawtypes")
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {

		httpSecurity.cors();
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/users").permitAll().antMatchers("/users/**").permitAll()
		.anyRequest();
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/vendors").permitAll().antMatchers("/vendors/**").permitAll()
		.anyRequest();
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/bill").permitAll().antMatchers("/bill/**").permitAll()
		.anyRequest();
		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/menu-items").permitAll()
				.anyRequest().authenticated().and().addFilter(new JwtAuthorizationFilter(authenticationManager()));

		httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/authenticate")
				.hasAnyRole("USER", "ADMIN","VENDOR").anyRequest().authenticated().and()
				.addFilter(new JwtAuthorizationFilter(authenticationManager()));

	}

	@Bean
	public InMemoryUserDetailsManager inMemoryUserDetailsManager() {
		LOGGER.info("Start");

		List<UserDetails> userDetailsList = new ArrayList<>();

		userDetailsList.add(User.withUsername("user").password(passwordEncoder().encode("pwd")).roles("USER").build());

		userDetailsList
				.add(User.withUsername("admin").password(passwordEncoder().encode("pwd")).roles("ADMIN").build());

		userDetailsList
		.add(User.withUsername("vendor").password(passwordEncoder().encode("pwd")).roles("VENDOR").build());
		
		LOGGER.info("End");

		return new InMemoryUserDetailsManager(userDetailsList);

	}

}
