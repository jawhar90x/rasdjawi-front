import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';
import { CartServiceService } from '../cart-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  
  public productList : any ;
  totalItem: any;
 
  constructor( private user:UserService,private carteService:CartServiceService,weatherService:WeatherServiceService) { }
 
  ngOnInit(): void {
    this.carteService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
     
    this.user.getProduct().subscribe(res=>{
      this.productList = res;
    
      this.productList.forEach((a:any) => {      
       Object.assign(a,{quantity:1,total:a.price}); //fonction qui calcule le total
      });
      console.log(this.productList)
    });
    
  }
  
 addToCart(item: any){
    this.carteService.addtoCart(item);
    console.log(item)
  }


}
