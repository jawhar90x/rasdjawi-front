import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { SmsComponent } from './sms/sms.component';
import { WeatherserviceComponent } from './weatherservice/weatherservice/weatherservice.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LogAdminComponent } from './log-admin/log-admin.component';
import { MembresComponent } from './dashboard/membres/membres.component';
import { CommandesComponent } from './dashboard/commandes/commandes.component';
import { ContactComponent } from './contact/contact.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageDisplayComponent } from './message/message-display/message-display.component';
import { ProductsListComponent } from './dashboard/products/products-list/products-list.component';
import { AddWeatherserviceComponent } from './weatherservice/add-weatherservice/add-weatherservice.component';
import { WeatherserviceListComponent } from './weatherservice/weatherservice-list/weatherservice-list.component';
import { AddProducsComponent } from './dashboard/products/add-producs/add-producs.component';
import { AuthGuard } from './auth.guard';
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
    path: 'sms',
    component: SmsComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'log-admin',
    component: LogAdminComponent
  },
  {
    path: 'membres',
    component: MembresComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'commandes',
    component: CommandesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'message-list',
    component: MessageListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'message-display/:id',
    component: MessageDisplayComponent
  },

  {
    path: 'products-lists',
    component: ProductsListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-weatherservice',
    component: AddWeatherserviceComponent
  },
  {
    path: 'weatherservice-list',
    component:WeatherserviceListComponent
  },
  {
    path: 'add-bulletin',
    component:AddProducsComponent
  },


  {
    path: '**',
    component: Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
