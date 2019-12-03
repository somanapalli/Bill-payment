package com.cognizant.billpaymentsystem.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.billpaymentsystem.model.Bill;
import com.cognizant.billpaymentsystem.model.User;

public interface BillRepository extends JpaRepository<Bill, Integer>{

	

	Bill findById(int id);
	
	
	
	@Query("From Bill")
	List<Bill> getBill();


//	@Query(value="select amt from bill where user_us_id=(select us_id from user where us_id=4);", nativeQuery = true)
//	Bill findbill(int bill);
//	
	
	@Query("SELECT u.bills from User u WHERE u.userid=?1")
	List<Bill> getUserBill(String id);
	

	
//	@Query("SELECT u.user from Bill u WHERE u.User.userid=?1")
//	List<Bill> getUserBill(String id);
//	
//	
}
