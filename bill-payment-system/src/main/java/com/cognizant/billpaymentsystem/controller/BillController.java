package com.cognizant.billpaymentsystem.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.billpaymentsystem.model.Bill;
import com.cognizant.billpaymentsystem.repository.BillRepository;
import com.cognizant.billpaymentsystem.service.AppBillDetailsService;

@RestController
@RequestMapping("/bill")
public class BillController {

	
	@Autowired
	BillRepository billRepository;
	
	@Autowired
	AppBillDetailsService billDetailsService;
		
	@GetMapping()
	public List<Bill> getBill() {
		return (billRepository.getBill());
	}
	
	
	@GetMapping("/{id}")
	public List<Bill> getuserbill(@PathVariable String id){
		return billRepository.getUserBill(id);
	}
	
	
	
	
//	@GetMapping("/{bill}")
//	public Bill getbillid(@PathVariable int bill){
//		return billRepository.findById(bill);
//	}
	
	
//	@PostMapping()
//	public void addBill(@RequestBody @Valid Bill newBill) throws BillAlreadyExists{
//		billDetailsService.addBill(newBill);
//	}
	
}
