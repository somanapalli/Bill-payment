package com.cognizant.billpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.billpaymentsystem.model.User;
import com.cognizant.billpaymentsystem.model.Vendor;


public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserid(String userid);
	
	User findById(int id);
	
	@Query("From User")
	List<User> getUser();
//
//	@Query("SELECT u.menuItems from User u WHERE u.username=?1")
//	List<MenuItem> getMenuItems(String username);
//
//	@Query(value = "select sum(me_price) from menu_item where me_id in(select ct_pr_id from cart where ct_us_id=(select us_id from user where us_username= :username))", nativeQuery = true)
//	public double getCartTotal(@Param(value = "username") String username);

}
