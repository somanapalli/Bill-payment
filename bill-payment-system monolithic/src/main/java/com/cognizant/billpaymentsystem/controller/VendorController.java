package com.cognizant.billpaymentsystem.controller;

import java.util.List;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.billpaymentsystem.model.Vendor;
import com.cognizant.billpaymentsystem.repository.VendorRepository;
import com.cognizant.billpaymentsystem.service.AppVendorDetailsService;

@RestController
@RequestMapping("/vendors")
public class VendorController {


	@Autowired
	AppVendorDetailsService appVendorDetailsService;
	
	@Autowired
	VendorRepository vendorRepository;

	
	@GetMapping()
	public List<Vendor> getVendor() {

		return (vendorRepository.getVendor());

	}
	
	@GetMapping("/{user}")
	public Vendor getVendorByName(@PathVariable String user){
		return vendorRepository.findByUname(user);
	}
	
	@PostMapping()
	public void signupVendor(@RequestBody @Valid Vendor newVendor) throws VendorAlreadyExistsException {
		appVendorDetailsService.signup(newVendor);
	}

	@PutMapping
	public ResponseEntity<Boolean> editVendor(@RequestBody Vendor vendor) {
		return new ResponseEntity<Boolean>(appVendorDetailsService.editVendor(vendor), HttpStatus.OK);
	}
}
