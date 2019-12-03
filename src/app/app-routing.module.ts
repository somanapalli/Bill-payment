import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './site/signup/signup.component';
import { VendorSignupComponent } from './site/vendor-signup/vendor-signup.component';
import { VendorEditComponent } from './site/vendor-edit/vendor-edit.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupvendor', component: VendorSignupComponent },
  { path: 'editvendor', component: VendorEditComponent },
  { path: 'bill/:uname', component:BillDetailsComponent},
  { path: 'paymentgateway/:uname', component: PaymentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
