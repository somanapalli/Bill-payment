import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Vendor } from '../site/Vendor/vendor';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { VendorService } from '../service/vendor.service';
import { User } from '../site/User/user';
import { BillService } from '../service/bill.service';
import { Bill } from '../service/bill';
import { element } from 'protractor';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  
 
  Bills: Bill[];
  items:Bill;
  bill:boolean = true;

  constructor(private router: Router, private route:ActivatedRoute,private authService:AuthService, private userService:UserServiceService, private service:BillService) { }
  
  ngOnInit() {
    const vendorId = this.route.snapshot.paramMap.get('uname');
    this.service.getbill(this.authService.username).subscribe(((data) => {
      this.Bills = data;
      console.log(this.Bills)
    
     for(let i=0;i<this.Bills.length;i++){
       if(this.Bills[i].vendor.uname==vendorId)
       this.items=this.Bills[i]
     }
     console.log(this.items);
     
     if(this.items==null){
       this.bill = false;
     }
    })
    )
  }

  pay(){
    this.router.navigate[("'/paymentgateway',this.items.vendor.uname")];
  }

}