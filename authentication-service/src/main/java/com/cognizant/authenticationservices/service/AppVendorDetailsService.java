package com.cognizant.authenticationservices.service;

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

import com.cognizant.authenticationservices.bean.AppVendor;
import com.cognizant.authenticationservices.bean.Role;
import com.cognizant.authenticationservices.bean.Vendor;
import com.cognizant.authenticationservices.exception.VendorAlreadyExistsException;
import com.cognizant.authenticationservices.repository.RoleRepository;
import com.cognizant.authenticationservices.repository.VendorRepository;


@Service
public class AppVendorDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppVendorDetailsService.class);

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	VendorRepository vendorRepository;

	@Override
	public UserDetails loadUserByUsername(String uname) throws UsernameNotFoundException {
		Vendor vendor = vendorRepository.findByUname(uname);
		if (vendor == null) {
			throw new UsernameNotFoundException("Vendor not found!");
		} else {
			LOGGER.info("vendor is:" + vendor);
			AppVendor appVendor = new AppVendor(vendor);
			LOGGER.info("vendorDetails : " + appVendor);
			System.out.println(vendor);
			return appVendor;
		}

	}
	
	public AppVendorDetailsService(VendorRepository vendorRepository) {
		super();
		this.vendorRepository = vendorRepository;
	}

	public void signup(Vendor newVendor) throws VendorAlreadyExistsException {
		System.out.println("abcd");
		LOGGER.info("NEW Vendor IS: " + newVendor);
		Vendor vendor = vendorRepository.findByUname(newVendor.getUname());
		if (vendor != null) {
			throw new VendorAlreadyExistsException();
		} else {
			Role role = roleRepository.findById(3).get();
			LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			newVendor.setRoles(roles);
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(newVendor.getPassword());
			newVendor.setPassword(encodedPassword);
			vendorRepository.save(newVendor);
		}

	}
	
	public boolean editVendor(Vendor vendor) {

		Vendor opVendor = vendorRepository.findByUname(vendor.getUname());
		if (opVendor != null) {
			Role role = roleRepository.findById(3).get();
			LOGGER.info("NEW ROLE IS: " + role);
			List<Role> roles = new ArrayList<Role>();
			roles.add(role);
			vendor.setRoles(roles);
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(vendor.getPassword());
			vendor.setPassword(encodedPassword);
			vendorRepository.save(vendor);
			return true;
		} else
			return false;

	}

}
