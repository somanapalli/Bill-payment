import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin: boolean;
  add: boolean = false;
  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  redirectUrl = '/';
  loggedIn: boolean = false;
  admin:boolean = false;
  user:boolean = false;
  vendor:boolean = false;
  username:string;
  vendor_type:string;
  id:number;
type:string;


  constructor(private userService: UserServiceService, public router: Router) { }
  
  authenticateUser(user) {
    for (let validUser of this.userService.users) {
      if (validUser.username == user.username && validUser.password == user.password) {
        this.loggedInUser = user;
        this.validCredentials = true;
        this.add = true;

        this.router.navigate(['Menu']);
        this.loggedIn = true;
      }
      else
        this.validCredentials = false;
    }
  }

  logout() {
    this.loggedInUser = { loggedOut: true };
    this.loggedIn = false;
    this.router.navigate(['login']);


  }
}
