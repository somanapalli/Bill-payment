package com.cognizant.authenticationservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.authenticationservices.bean.Role;



public interface RoleRepository extends JpaRepository<Role, Integer> {

}
