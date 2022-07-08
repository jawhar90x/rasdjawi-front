import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherserviceComponent } from './weatherservice/weatherservice/weatherservice.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import { SmsComponent } from './sms/sms.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LogAdminComponent } from './log-admin/log-admin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CommandesComponent } from './dashboard/commandes/commandes.component';
import { MembresComponent } from './dashboard/membres/membres.component';
import { SidebarComponent } from './app/dashboard/sidebar/sidebar.component';
import { AppFooterDashboardComponent } from './app-footer-dashboard/app-footer-dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactComponent } from './contact/contact.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageDisplayComponent } from './message/message-display/message-display.component';
import { ProductsListComponent } from './dashboard/products/products-list/products-list.component';
import { AddProducsComponent } from './dashboard/products/add-producs/add-producs.component';
import { AddWeatherserviceComponent } from './weatherservice/add-weatherservice/add-weatherservice.component';
import { WeatherserviceListComponent } from './weatherservice/weatherservice-list/weatherservice-list.component';
 

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
    MembresComponent,
    SidebarComponent,
    AppFooterDashboardComponent,
    SideBarComponent,
    FooterDashboardComponent,
    TopBarComponent,
    ContactComponent,
    MessageListComponent,
    MessageDisplayComponent,
    ProductsListComponent,
    AddProducsComponent,
    AddWeatherserviceComponent,
    WeatherserviceListComponent,
   
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
