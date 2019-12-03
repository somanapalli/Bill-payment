import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Vendor } from '../site/Vendor/vendor';
import { AuthService } from '../service/auth.service';
import { UserServiceService } from '../service/user-service.service';
import { VendorService } from '../service/vendor.service';
import { User } from '../site/User/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Vendors: Vendor[] = [];
  
  constructor(private router: Router, private authService:AuthService, private userService:UserServiceService, private service:VendorService) { }

  ngOnInit() {
    console.log(this.authService.username);
    
    this.service.getvendors().subscribe((data: Vendor[]) => {
      this.Vendors = data;
      console.log(this.Vendors)
    })
    this.service.getSubject().subscribe((data) => { this.Vendors = data });

}

}
