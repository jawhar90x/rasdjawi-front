import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../classe/message';
 

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactService() {
    throw new Error('Method not implemented.');
  }

  private getAllMessageUrl = "http://localhost:3001/message/"
  private getOneUserUrl = "http://localhost:3001/message/"
  private deleteMessageUrl = "http://localhost:3001/message/"
  private AddmessagesUrl = "http://localhost:3001/message/"
  private UpdateMessagesUrl = "http://localhost:3001/message/"

  constructor(private http: HttpClient) { }



  getAllMessage() {
    return this.http.get<any>(this.getAllMessageUrl);
  }
  
  getOneMessage(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }
  deleteMessage(id: String) {
    return this.http.delete<any>(this.deleteMessageUrl + id)
  }
  addMessage(message: Message) {
    return this.http.post<any>(this.AddmessagesUrl, message);
  }
  
  updateMessage(message: String) {
    return this.http.put<any>(this.UpdateMessagesUrl, message);
  }
}
 


