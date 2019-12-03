import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from './bill';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  url: string = environment.baseUrl ;
  private billsubject = new Subject<Bill[]>();
  gateway:string;

  constructor(private router: Router, private _httpClient: HttpClient, private _authService:AuthenticationService) { }



  getbill(id: string): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    //return this._httpClient.get<Bill[]>(this.url+"bill/"+id,  { headers })
    return this._httpClient.get<Bill[]>(this.url+"payment-services/bill/"+id,  { headers })
  }

  getbills():Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    //return this._httpClient.get<Bill>(this.url+"bill",  { headers })
    return this._httpClient.get<Bill>(this.url+"payment-services/bill",  { headers })
  }

  getSubject(): Subject<Bill[]> {
    return this.billsubject;
  }
}
