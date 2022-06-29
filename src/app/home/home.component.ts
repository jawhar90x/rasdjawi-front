import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Adress } from '../adress';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myform: FormGroup | undefined
  constructor(private userService: UserService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }


  //http://api.openweathermap.org/data/2.5/weather?q=${addrr}&APPID=c29ba7cc7629039b6dfc469e8b00b288
  
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

}