import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../site/Vendor/vendor';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {
  // @Input() vendors: Vendor[];
  @Input() vendors:Vendor;

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
    console.log(this.vendors);
  }

  showDetails(){
  
    this.router.navigate(['bill'])
    console.log(this.vendors)
    console.log(this.authService.username);
   
   }

}
