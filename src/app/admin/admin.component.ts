import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../site/Vendor/vendor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() vendors:Vendor;
  constructor() { }

  ngOnInit() {
  }

}
