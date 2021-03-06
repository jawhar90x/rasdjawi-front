import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) {
    let formLogin = {

      email: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    }
    this.myform = this.fb.group(formLogin)


  }
  get password() { return this.myform.get('password') }
  get email() { return this.myform.get('email') }


  ngOnInit(): void {
  }




  login() {


    let data = this.myform.value;
    let user = new User("", "", "", data.email, data.password)
    this.userService.loginUser(user).subscribe({
      next: (result) => {
      
        console.log(result.headers.get('Authorization'))
        console.log(result.body.message)
        /*let token = result.token;
        localStorage.setItem("myToken", token)
        this.toastr.success(result.message);
 
        this.router.navigate(['/weatherservice']);
*/
      },
      error: (err) => {
        console.log(err);
      }

    })

  }




}