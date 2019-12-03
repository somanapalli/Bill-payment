import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuild: FormBuilder, private authService: AuthenticationService, private router: Router, private _authService: AuthService) { }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  toSignup() {
    this.router.navigate(['signup'])
  }

  getUsername() {
    return this.loginForm.value['username'];
  }

  getPassword() {
    return this.loginForm.value['password'];
  }

  invalidLogin: boolean;
  error: string = "Login Failed"

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }


  onSubmit(user) {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        //console.log("onsubmit working")
        this.invalidLogin = false
        this.authService.setToken(data.token);
        this.error = "Logged In successfully";
        this._authService.loggedIn = true;
        // this.foodService.isLoggedIn = true;
        this._authService.username = this.getUsername();
        this.router.navigate(['home'])
        
        if (data.role == 'ADMIN')
          this._authService.admin = true;
          //  console.log("admin ")
        else if(data.role == 'USER')
           this._authService.user = true;
          //console.log("user")
        else if(data.role == 'VENDOR')
            this._authService.vendor = true;
          //console.log("admin ")
                

        this.authService.username = this.getUsername();
       
        console.log("logged in");
        //this.router.navigate(['']);
        //this.router.navigate(['Menu'])
        //console.log("Token Generated"+data.token);
        //console.log("Token Generated"+data.role);

      },
      error => {
        this.invalidLogin = true
        if (error.status == 401)
          this.error = "Invalid Username or Password";
        //console.log(error);
      }
    );
  }

}
