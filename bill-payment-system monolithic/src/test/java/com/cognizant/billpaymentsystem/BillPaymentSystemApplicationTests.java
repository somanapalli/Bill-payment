package com.cognizant.billpaymentsystem;
import static org.junit.Assert.assertEquals;

import java.sql.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cognizant.billpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.billpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.billpaymentsystem.model.Bill;
import com.cognizant.billpaymentsystem.model.User;
import com.cognizant.billpaymentsystem.model.Vendor;
import com.cognizant.billpaymentsystem.repository.BillRepository;
import com.cognizant.billpaymentsystem.repository.UserRepository;
import com.cognizant.billpaymentsystem.repository.VendorRepository;
import com.cognizant.billpaymentsystem.service.AppUserDetailsService;
import com.cognizant.billpaymentsystem.service.AppVendorDetailsService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BillPaymentSystemApplication.class)
public class BillPaymentSystemApplicationTests {

     @Autowired
     private UserRepository userrepository;
     
     @Autowired
     private VendorRepository vendorrepo;
     
     @Autowired
     private AppUserDetailsService userservice;
     
     @Autowired
     private UserRepository urepository;
     
     @Autowired
     private BillRepository billRepository;

       @Mock
       AppVendorDetailsService vendorService;

       @Before
       public void init() {
              MockitoAnnotations.initMocks(this);
       }
       

          
   
       
     @Test
     public void testUserID() throws UserAlreadyExistsException{
          User dr= new User();
          dr.setUserid("user");
          dr.setAadhar_number("asada");
          dr.setContact(1234);
          dr.setFirstName("dsada");
          dr.setGender("male");
          dr.setLastName("ashdkasjd");
          dr.setPan("sadasd");
          dr.setPassword("pwd");
          User u=urepository.findByUserid("user");
          assertEquals(u.getUserid(),dr.getUserid());
     }


@Test
public void testVendorID() throws VendorAlreadyExistsException{
     Vendor dr= new Vendor();
      String str="2019-11-11";
     Date d= Date.valueOf(str);
     dr.setUname("vendor");
     dr.setAddress("asdsad");
     dr.setCert_issue_date(d);
     dr.setCert_validity_date(d);
     dr.setContact_number(123);
     dr.setCountry("india");
     dr.setName("balaji");
     dr.setReg_no("asdasd");
     dr.setPayment_gateway("Paytm");
     dr.setState("andhra");
     dr.setVendor_email("sadasd");
     dr.setVendor_type("DTH");
     dr.setWebsite("asdd");
dr.setYear_establishment(2312);
dr.setPassword("pwd");

     
     Vendor v1=vendorrepo.findByUname("vendor");
    // User u=urepository.findByUserid("user");
     assertEquals(v1.getUname(),dr.getUname());
}




@Test
public void testBillID() {
     Bill dr= new Bill();
     String str="2019-11-11";
     Date d= Date.valueOf(str);
     dr.setAmt(123);
     dr.setConsumerid("1213");
     dr.setId(1);
     User u=urepository.findByUserid("user");
     dr.setUser(u);
     Vendor v1=vendorrepo.findByUname("vendor");
     dr.setVendor(v1);
     
     Bill bill =billRepository.findById(1);
     assertEquals(dr.getId(),bill.getId());
}
}
       
       
 