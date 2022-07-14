import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherCurrentService {

  private getWeatherCurrentUrl = "api.weatherapi.com/v1/current.json?key=bb9101a89f954111876204618221307&q=${Tunisie}&aqi=no/"
  constructor(private http: HttpClient) { }

  getWeatherCurrent() {
    return this.http.get<any>(this.getWeatherCurrentUrl);
  }

}
