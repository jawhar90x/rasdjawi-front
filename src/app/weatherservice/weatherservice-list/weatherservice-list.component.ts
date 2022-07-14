import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WeatherServiceService } from 'src/app/service/weather-service.service';
import { BaseService } from 'src/app/service/base.service';
@Component({
  selector: 'app-weatherservice-list',
  templateUrl: './weatherservice-list.component.html',
  styleUrls: ['./weatherservice-list.component.css']
})
export class WeatherserviceListComponent implements OnInit {
  weatherseviceList: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(private toastr: ToastrService, private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherservice().subscribe({
      next: (result) => {
        this.weatherseviceList = result
      },
      error: (error) => {
        console.log(error)
      },
    });
  }

  delete(id: string, index: number) {
    this.weatherseviceList.splice(index, 1);

  }

}
