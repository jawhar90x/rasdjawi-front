import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherserviceComponent } from './weatherservice/weatherservice.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { SmsComponent } from './sms/sms.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LogAdminComponent } from './log-admin/log-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommandesComponent } from './dashboard/commandes/commandes.component';
import { MembresComponent } from './dashboard/membres/membres.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    WeatherserviceComponent,
    Page404Component,
    CartComponent,
    SmsComponent,
    CheckoutComponent,
    LogAdminComponent,
    DashboardComponent,
    CommandesComponent,
    MembresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
