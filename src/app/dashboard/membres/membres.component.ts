import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user';


@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  membres: any[] = []

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.membres = result
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(person:any) {
    let index = this.membres.indexOf(person);
    this.membres.splice(index, 1);

    this.userService.deleteUser(person._id).subscribe({
      next:(result)=>{
        this.toastr.error(result.message);
      },
      error:(err) =>{
        console.log(err);
      }
    }
    )
  }

}
