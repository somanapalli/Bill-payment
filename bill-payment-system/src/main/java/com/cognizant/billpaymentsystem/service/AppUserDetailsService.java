package com.cognizant.billpaymentsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.billpaymentsystem.exception.UserAlreadyExistsException;

import com.cognizant.billpaymentsystem.model.AppUser;
import com.cognizant.billpaymentsystem.model.AppVendor;
import com.cognizant.billpaymentsystem.model.Role;
import com.cognizant.billpaymentsystem.model.User;
import com.cognizant.billpaymentsystem.model.Vendor;
import com.cognizant.billpaymentsystem.repository.RoleRepository;
import com.cognizant.billpaymentsystem.repository.UserRepository;
import com.cognizant.billpaymentsystem.repository.VendorRepository;


@Service
public class AppUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UserRepository userRepository;
	

	@Autowired
	VendorRepository vendorRepository;


	
	@Override
	public UserDetails loadUserByUsername(String userid) throws UsernameNotFoundException {
		User user = userRepository.findByUserid(userid);
		Vendor vendor = vendorRepository.findByUname(userid);
		if (user == null && vendor == null) {
			throw new UsernameNotFoundException("User/Vendor not found!");
		} else if(vendor == null && user !=null){
			AppUser appUser = new AppUser(user);
			System.out.println(user);
			return appUser;
		}
		else if(user == null && vendor !=null){
			AppVendor appVendor = new AppVendor(vendor);
			System.out.println(vendor);
			return appVendor;
		}
		else{
			throw new UsernameNotFoundException("User/vendor not found!");
		}

	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void signup(User newUser) throws UserAlreadyExistsException {
		System.out.println("abcd");
		LOGGER.info("NEW USER IS: " + newUser);
		User user = userRepository.findByUserid(newUser.getUserid());
		if (user != null) {
			throw new UserAlreadyExistsException();
		} else {
			Role role = roleRepository.findById(1).get();
			LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			newUser.setRoles(roles);
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(newUser.getPassword());
			newUser.setPassword(encodedPassword);
			userRepository.save(newUser);
		}

	}


}
