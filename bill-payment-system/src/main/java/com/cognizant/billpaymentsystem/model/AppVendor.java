package com.cognizant.billpaymentsystem.model;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class AppVendor implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Vendor vendor; // entity reference
	private Collection<? extends GrantedAuthority> authorities;

	public AppVendor(Vendor vendor) {
		this.vendor = vendor;
		this.authorities =  vendor.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName()))
				.collect(Collectors.toList());

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getPassword() {
		return vendor.getPassword();
	}

	

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public String toString() {
		return "AppVendor [vendor=" +vendor + ", authorities=" + authorities + "]";
	}

	@Override
	public String getUsername() {
		return vendor.getUname();
	}

}
