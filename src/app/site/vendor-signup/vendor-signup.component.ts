import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { Vendor } from '../Vendor/vendor';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent implements OnInit {

  signUpForm: FormGroup;
  vendor: Vendor;
  vendorCreated: boolean;
  error: string;

  constructor(private formBuilder: FormBuilder, private vendorService: VendorService,private router: Router) { }
 
  get uname() {
    return this.signUpForm.get('uname');
  }
  get name() {
    return this.signUpForm.get('name');
  }

  get reg_no() {
    return this.signUpForm.get('reg_no');
  }

  get vendor_type() {
    return this.signUpForm.get('vendor_type');
  }

  get address() {
    return this.signUpForm.get('address');
  }

  get country() {
    return this.signUpForm.get('country');
  }

  get state() {
    return this.signUpForm.get('state');
  }
  get vendor_email() {
    return this.signUpForm.get('vendor_email');
  }

  get contact_number() {
    return this.signUpForm.get('contact_number');
  }

  get website() {
    return this.signUpForm.get('website');
  }

  get cert_issue_date() {
    return this.signUpForm.get('cert_issue_date');
  }

  get cert_validity_date() {
    return this.signUpForm.get('cert_validity_date');
  }

  get year_establishment() {
    return this.signUpForm.get('year_establishment');
  }

  get payment_gateway() {
    return this.signUpForm.get('payment_gateway');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      uname: ['', [
        Validators.required,
        this.isvendoridTaken
      ]],
      name: ['', [
        Validators.required
      ]],
      reg_no: ['', [
        Validators.required
      ]],
      vendor_type: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      country: ['', [
        Validators.required
      ]],
      state: ['', [
        Validators.required
      ]],
      vendor_email: ['', [
        Validators.required
      ]],
      contact_number: ['', [
        Validators.required
      ]],
      website: ['', [
        Validators.required
      ]],
      cert_issue_date: ['', [
        Validators.required
      ]],
      cert_validity_date: ['', [
        Validators.required
      ]],
      year_establishment: ['', [
        Validators.required
      ]],
      payment_gateway: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

  isvendoridTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'useridTaken': true };
    } else {
      return null;
    }
  }

  addVendor() {
    console.log(this.signUpForm.value['uname']);

    this.vendor = {id:null,uname: this.signUpForm.value['uname'],password: this.signUpForm.value['password'], name: this.signUpForm.value['name'], reg_no: this.signUpForm.value['reg_no'], vendor_type: this.signUpForm.value['vendor_type'],address: this.signUpForm.value['address'],country: this.signUpForm.value['country'],state: this.signUpForm.value['state'], vendor_email: this.signUpForm.value['vendor_email'],contact_number: this.signUpForm.value['contact_number'],website: this.signUpForm.value['website'],cert_issue_date: this.signUpForm.value['cert_issue_date'],cert_validity_date: this.signUpForm.value['cert_validity_date'],year_establishment: this.signUpForm.value['year_establishment'],payment_gateway: this.signUpForm.value['payment_gateway'], };
    this.vendorService.addVendor(this.vendor).subscribe(data => {
      this.vendorCreated = true;
      console.log(this.vendorCreated);
      window.alert("Vendor Registered Successfully");
      this.router.navigate(['login'])
    },
      error => {
        console.log("error")
        if (error.status == 500) {
          this.error = "Vendor Already Exists";
          this.vendorCreated = false;
        }
        console.log(this.error);
      }
    );
  }
}
