package com.cognizant.authenticationservices.exception;

public class VendorAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	public VendorAlreadyExistsException() {
		super("Vendor already exists");
	}

}
