import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from '../User/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  userCreated: boolean;
  error: string;
  switch:boolean=false;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private router: Router) { }
  get userid() {
    return this.signUpForm.get('userid');
  }
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }
  get age() {
    return this.signUpForm.get('age');
  }

  get contact() {
    return this.signUpForm.get('contact');
  }

  get pan() {
    return this.signUpForm.get('pan');
  }

  get aadhar_number() {
    return this.signUpForm.get('aadhar_number');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      userid: ['', [
        Validators.required,
        this.isuseridTaken
      ]],
      firstname: ['', [
        Validators.required
      ]],
      lastname: ['', [
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      contact: ['', [
        Validators.required
      ]],
      pan: ['', [
        Validators.required
      ]],
      aadhar_number: ['', [
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

  isuseridTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'useridTaken': true };
    } else {
      return null;
    }
  }

tovendor(){
  this.router.navigate(['signupvendor']);
  this.switch=true;

}

touser(){
  this.switch=true;
}

  addUser() {
    console.log(this.signUpForm.value['firstname']);

    this.user = { id:null,firstName: this.signUpForm.value['firstname'], lastName: this.signUpForm.value['lastname'],gender: this.signUpForm.value['gender'], age: this.signUpForm.value['age'], contact: this.signUpForm.value['contact'],pan: this.signUpForm.value['pan'],aadhar_number: this.signUpForm.value['aadhar_number'],password: this.signUpForm.value['password'], userid: this.signUpForm.value['userid'] };
    this.userService.addUser(this.user).subscribe(data => {
      this.userCreated = true;
      console.log(this.userCreated)
      window.alert("New User Created Successfully");
      this.router.navigate(['login'])
    },
      error => {
        console.log("error")
        if (error.status == 500) {
          this.error = "User Already Exists";
          this.userCreated = false;
        }
        console.log(this.error);
      }
    );
  }

}
