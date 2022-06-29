import { Component, OnInit } from '@angular/core';

import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  public item  :any[]=[{name:'free sms' ,prix:2}];
  public item2  :any[]=[{name:'pro' ,prix:10}];
  public totalItem : number = 0;
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor( private carteService : CartServiceService) { }

  ngOnInit(): void {
    
    this.carteService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.carteService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCart(item: any){
    this.carteService.addtoCart(item);
    console.log(item)
  }
 

}
