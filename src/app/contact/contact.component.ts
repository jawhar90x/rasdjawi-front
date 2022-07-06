import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Message } from '../classe/message';
import { ContactService } from '../service/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myform: FormGroup;
  constructor(private fb: FormBuilder,private contactService: ContactService,private router:Router,private toastr:ToastrService) {
    let registerForm = {
      
      gender: new FormControl('', [
        Validators.required]
      ),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      content: new FormControl('',
        Validators.required,
      ),
      message: new FormControl('',
      Validators.required,
    ),
    
    }
    this.myform=this.fb.group(registerForm);
  }
  get gender() { return this.myform.get('gender') }
  get email() { return this.myform.get('email') }
  get content() { return this.myform.get('content') }
  get message() { return this.myform.get('message') }
  
 


  ngOnInit(): void {
  }
SendMessage()
{
  let data = this.myform.value;
  let message =new Message(data.gender,data.email,data.content,data.message)
  

 this.contactService.addMessage(message).subscribe(
  {
    next: res => {
      this.toastr.info(res.message);
      this.myform.reset()
    },
    error: err => {
      console.log(err);
    }
  }
 )
}
  
}