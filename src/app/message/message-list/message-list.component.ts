import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messageList: any[] = []
  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
    this.contactservice.getAllMessage().subscribe({
      next: (result) => {
        console.log(result)
        this.messageList = result
        console.log(result)
      },
      error: (error) => {
        console.log(error);
      }

    })
  }

  delete(id:String,index:number)
  {
    this.messageList.splice(index, 1)
    console.log(id)
    this.contactservice.deleteMessage(id).subscribe({
      next:(result)=>{
        console.log(result)
      },
      error: (err) => {
        console.log(err);
      
      }
    })
  }

}