import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../Vendor/vendor';
import { AuthService } from 'src/app/service/auth.service';
import { VendorService } from 'src/app/service/vendor.service';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  editForm: FormGroup;
  vendor: Vendor;
  editDone: boolean = false;

  constructor(private formBuild: FormBuilder,private authService:AuthService,private formBuilder: FormBuilder, private vendorService: VendorService,private router: Router, private route: ActivatedRoute) { }
 
  get id(){
    return this.editForm.get('id');
  }
  get uname() {
    return this.editForm.get('uname');
  }
  get name() {
    return this.editForm.get('name');
  }

  get reg_no() {
    return this.editForm.get('reg_no');
  }

  get vendor_type() {
    return this.editForm.get('vendor_type');
  }

  get address() {
    return this.editForm.get('address');
  }

  get country() {
    return this.editForm.get('country');
  }

  get state() {
    return this.editForm.get('state');
  }
  get vendor_email() {
    return this.editForm.get('vendor_email');
  }

  get contact_number() {
    return this.editForm.get('contact_number');
  }

  get website() {
    return this.editForm.get('website');
  }

  get cert_issue_date() {
    return this.editForm.get('cert_issue_date');
  }

  get cert_validity_date() {
    return this.editForm.get('cert_validity_date');
  }

  get year_establishment() {
    return this.editForm.get('year_establishment');
  }

  get payment_gateway() {
    return this.editForm.get('payment_gateway');
  }

  get password() {
    return this.editForm.get('password');
  }
  
  get confirmPassword() {
    return this.editForm.get('confirmPassword');
  }

  ngOnInit() {
    
    this.vendorService.getvendor(this.authService.username).subscribe(
      (data) => {
        console.log(data);
        this.vendor = data;
        this.editForm = this.formBuilder.group({
          uname: [this.vendor.uname, [
            Validators.required
          ]],
          id: [this.vendor.id, [
            Validators.required
          ]],
          name: [this.vendor.name, [
            Validators.required
          ]],
          reg_no: [this.vendor.reg_no, [
            Validators.required
          ]],
          vendor_type: [this.vendor.vendor_type, [
            Validators.required
          ]],
          address: [this.vendor.address, [
            Validators.required
          ]],
          country: [this.vendor.country, [
            Validators.required
          ]],
          state: [this.vendor.state, [
            Validators.required
          ]],
          vendor_email: [this.vendor.vendor_email, [
            Validators.required
          ]],
          contact_number: [this.vendor.contact_number, [
            Validators.required
          ]],
          website: [this.vendor.website, [
            Validators.required
          ]],
          cert_issue_date: [this.vendor.cert_issue_date, [
            Validators.required
          ]],
          cert_validity_date: [this.vendor.cert_validity_date, [
            Validators.required
          ]],
          year_establishment: [this.vendor.year_establishment, [
            Validators.required
          ]],
          payment_gateway: [this.vendor.payment_gateway, [
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
    )

    this.editForm=this.formBuild.group({
      id:[null],
      uname: [null],
      name: [null],
      reg_no: [null],
      vendor_type: [null],
      address: [null],
      country: [null],
      state: [null],
      vendor_email: [null],
      contact_number: [null],
      website: [null],
      cert_issue_date: [null],
      cert_validity_date: [null],
      year_establishment: [null],
      payment_gateway: [null],
      password: [null],
      confirmPassword:[null]
    
    })
   
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.editForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.editForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

  
  onSubmit() {

    let newVendor:Vendor = { uname:this.editForm.value['uname'], id:this.editForm.value['id'], name: this.editForm.value['name'], 
        reg_no: this.editForm.value['reg_no'], vendor_type: this.editForm.value['vendor_type'],
        address: this.editForm.value['address'],country: this.editForm.value['country'],state: this.editForm.value['state'], 
        vendor_email: this.editForm.value['vendor_email'],contact_number: this.editForm.value['contact_number'],
        website: this.editForm.value['website'],cert_issue_date: this.editForm.value['cert_issue_date'],
        cert_validity_date: this.editForm.value['cert_validity_date'],
        year_establishment: this.editForm.value['year_establishment'],payment_gateway: this.editForm.value['payment_gateway'],
        password: this.editForm.value['password'] };

    
    this.vendorService.editVendor(newVendor).subscribe(data => {
           this.editDone = true;
           window.alert("edit done")
    }
  
    );
    console.log(newVendor);
  }  

}
