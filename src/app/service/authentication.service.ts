import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient) { }

  private authenticationApiUrl = environment.baseUrl;
  private token: string;
  username: string;

  validCredentials: boolean = true;

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }


  authenticate(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
    //return this._httpClient.get(this.authenticationApiUrl + "authenticate", { headers })
    return this._httpClient.get(this.authenticationApiUrl + "authentication-service/authenticate", { headers })
  }
}
