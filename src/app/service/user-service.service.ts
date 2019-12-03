import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../site/User/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = environment.baseUrl ;

  users = [
    { username: 'admin', firstname: "admin", lastname: "admin", password: "pwd" },
    { username: 'user', firstname: "customer", lastname: "customer", password: "pwd" },
  ];

  constructor(private router: Router, private _httpClient: HttpClient, private _authService:AuthenticationService) { }
  
  addUser(user: User): Observable<any> {
    console.log("Inside add user of service ")
    console.log(user)
    
    //return this._httpClient.post<any>(this.url + "users", user)
    return this._httpClient.post<any>(this.url + "payment-services/users", user)
    this.router.navigate(['login']);
  }
  
  getuser(username: string) {
    let user = this.users.filter((user) => (user.username == username));
    return user[0];
  }
  
  
  getusers(userid: number) {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    //monolithic
    //return this._httpClient.get<User>(this.url+"users/"+userid,  { headers })
    //micro
    return this._httpClient.get<User>(this.url+"payment-services/users/"+userid,  { headers })
  }


  getallusers():Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<User>(this.url+"payment-services/users",  { headers })
  }
}
