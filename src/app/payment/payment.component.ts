import { Component, OnInit } from '@angular/core';
import { Bill } from '../service/bill';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserServiceService } from '../service/user-service.service';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  Bills:Bill[];
  items:Bill;
  gateway:string;
  paid:boolean;
  
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
  })
  )
}

onSubmit(){
  window.alert("Bill Paid Successfully");
  this.paid=true;
}


}
