package com.cognizant.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.billpaymentsystem.model.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer>{
	
	Vendor findByUname(String uname);
	
	@Query("From Vendor")
	List<Vendor> getVendor();
	
}
