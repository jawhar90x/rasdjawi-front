import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Adress } from '../adress';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';
import { WeatherCurrentService } from '../service/weather-current.service';
import { cpuUsage } from 'process';
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current: any
  myform: FormGroup | undefined
  constructor(private weatherCurrent: WeatherCurrentService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.weatherCurrent.getWeatherCurrent().subscribe({
      next: (result) => {
        this.current = result
        console.log(result)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }


  //http://api.openweathermap.org/data/2.5/weather?q=${addrr}&APPID=c29ba7cc7629039b6dfc469e8b00b288
  /*
  weatherCurrent() {
     let data = this.myform.value;
  let adress = new Adress(data.city, data.temp, data.Cloudy, data.Humidty, data.wind)
    this.userService.weatherCurrent().subscribe({

      next: (result) => {

      },
      error: (err) => {
        console.log(err)
      }

    })



  }
*/
}