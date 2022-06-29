import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { SmsComponent } from './sms/sms.component';
import { WeatherserviceComponent } from './weatherservice/weatherservice.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogAdminComponent } from './log-admin/log-admin.component';
import { MembresComponent } from './dashboard/membres/membres.component';
import { CommandesComponent } from './dashboard/commandes/commandes.component';
 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'weatherservice',
    component: WeatherserviceComponent,
  },

  {
    path:'sms',
    component:SmsComponent
  },

  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'log-admin',
    component:LogAdminComponent
  },
  {
    path:'membres',
    component:MembresComponent
  },
  {
    path:'commandes',
    component:CommandesComponent
  },
  {
    path:'**',
    component:Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
