import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {

  message: any
  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];//na5ou id mel lien 
    this.contactService.getOneMessage(id).subscribe({
      next: (result) => {
        this.message = result
      },
      error: (error) => {
        console.log(error);

      }
    })
  }

}
