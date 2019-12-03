import { Component, OnInit } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Vendor } from '../site/Vendor/vendor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Vendors: Vendor[];
  searchKey: string;
  FilteredVendors: Vendor[];
  

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.vendorService.getvendors().subscribe((data:Vendor[])=>{
      this.Vendors=data;
      console.log(this.Vendors)
    })
   
  }

  onSearch() {
    this.FilteredVendors = this.Vendors.filter(vendor => vendor.vendor_type.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    //this.foodService.getSubject().next(this.FilteredItems);
    this.vendorService.getSubject().next(this.FilteredVendors);
  }
}
