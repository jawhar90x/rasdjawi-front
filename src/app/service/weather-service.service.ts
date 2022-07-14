import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherserviceComponent } from '../weatherservice/weatherservice/weatherservice.component';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  //private AddweatherServiceUrl = "http://localhost:3001/weatherservice/"
  private weatherServiceUrl = `${BaseService.baseUrl}/weatherservice/`;

  constructor(private http: HttpClient) { }

  addWeatherservice(weatherservice: any) {
    return this.http.post<any>(this.weatherServiceUrl, weatherservice);
  }
  
  getWeatherservice() {
    return this.http.get<any>(this.weatherServiceUrl);
  }

  getOneWeatherservice(id: any) {
    return this.http.get<any>(this.weatherServiceUrl + id)
  }

  deletWeatherservice(id: String) {
    return this.http.delete<any>(this.weatherServiceUrl + id)
  }

 

  updatWeatherservice(weatherservice: any, id:string) {
    return this.http.patch<any>(this.weatherServiceUrl+id, weatherservice);
  }
  
}

