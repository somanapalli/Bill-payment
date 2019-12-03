package com.cognizant.billpaymentsystem.exception;

public class VendorAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public VendorAlreadyExistsException() {
		super("Vendor already exists");
	}

}
