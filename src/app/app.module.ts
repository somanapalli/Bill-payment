import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VendorSignupComponent } from './site/vendor-signup/vendor-signup.component';
import { VendorEditComponent } from './site/vendor-edit/vendor-edit.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { SearchComponent } from './search/search.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    VendorSignupComponent,
    VendorEditComponent,
    VendorInfoComponent,
    SearchComponent,
    BillDetailsComponent,
    PaymentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
