package com.cognizant.authenticationservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.authenticationservices.bean.Vendor;


public interface VendorRepository extends JpaRepository<Vendor, Integer>{
	
	Vendor findByUname(String uname);
	
	@Query("From Vendor")
	List<Vendor> getVendor();
	
}
