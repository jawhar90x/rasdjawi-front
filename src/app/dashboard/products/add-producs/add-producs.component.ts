import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-producs',
  templateUrl: './add-producs.component.html',
  styleUrls: ['./add-producs.component.css']
})
export class AddProducsComponent implements OnInit {

  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/default.jpg';

  constructor(private fb: FormBuilder,private router: Router,private toastr: ToastrService)
   {
    let weatherservice = {
      name: new FormControl('', [
        Validators.required,

      ]),
    }
    this.myForm = this.fb.group(weatherservice)
  }
  get name() { return this.myForm.get('name') }
  get description (){return this.myForm.get('description')}
  ngOnInit(): void { }

  save( event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
     


 
  }

  add() {

    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('name', data.name),
      formData.append('picture', this.selectedFile);

  }
}
