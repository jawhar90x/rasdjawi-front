import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService,private router:Router,private toastr:ToastrService) {
    let registerForm = {
      firstname: new FormControl('', [
        Validators.required,
      ]

      ),
      lastname: new FormControl('', [
        Validators.required]
      ),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phone: new FormControl('',
        Validators.required,
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)]
      ),
      repeatpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    }
    this.myform=this.fb.group(registerForm);
  }
  get firstname() { return this.myform.get('firstname') }
  get lastname() { return this.myform.get('lastname') }
  get phone() { return this.myform.get('phone') }
  get password() { return this.myform.get('password') }
  get email() { return this.myform.get('email') }
  get repeatpassword() { return this.myform.get('repeatpassword') }

  ngOnInit(): void {
  }
register()
{
  let data = this.myform.value;
  let user =new User(data.firstname,data.lastname,data.phone,data.email,data.password)
  console.log(user)

  this.userService.registerUser(user).subscribe({
    next: (result) => {
      
      console.log(result)
      this.toastr.success(result.message);
      this.router.navigate(['/login']);
   

    },
    error: (err) => {
      console.log(err);


    }

  }
)
}
}
