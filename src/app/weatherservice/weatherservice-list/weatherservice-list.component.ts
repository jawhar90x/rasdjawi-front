import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherservice-list',
  templateUrl: './weatherservice-list.component.html',
  styleUrls: ['./weatherservice-list.component.css']
})
export class WeatherserviceListComponent implements OnInit {
  weatherseviceList: any[] = [];
 
  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string, index: number) {
    this.weatherseviceList.splice(index, 1);
    
  }

}
