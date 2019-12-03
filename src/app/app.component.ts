import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bill-payment-system';

  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['home']);
    
  }

  constructor(public router: Router,private authService:AuthService) {
  }

  loggedIn(): boolean {
    if (this.authService.loggedIn) {
      this.authService.loggedIn = true;
      return true
    }
    else {
      this.authService.loggedIn = false;
      return false;
    }
  }


  exit(){
    window.location.reload();
  }
}


