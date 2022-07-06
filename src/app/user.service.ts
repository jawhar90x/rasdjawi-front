import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from './adress';
import { User } from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private getProductsUrl = "https://fakestoreapi.com/products"
  private getAllUsersUrl = "http://localhost:3001/users/"
  private getOneUserUrl = "http://localhost:3001/users/"
  private deleteUserUrl = "http://localhost:3001/users/"
  private updateUserUrl = "https://localhost:3001/users/update"
  private registerUserurl = "http://localhost:3001/users/register"
  private loginUserurl = "http://localhost:3001/users/login"
  private weatherCurrenturl = "http://localhost:3001/weather/:address"

  constructor(private http: HttpClient) { }
 
  getProduct(){
    return this.http.get<any>(this.getProductsUrl);
  }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }
  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }
  updateUser(user: User) {
    return this.http.put<any>(this.updateUserUrl, user);
  }


  weatherCurrent(adress: Adress) {
    return this.http.get<any>(this.weatherCurrenturl)
  }

  registerUser(user: User) {
    return this.http.post<any>(this.registerUserurl, user);
  }
/*
  loginUser(user: User) {
    return this.http.post<any>(this.loginUserurl, user);
  }
  */
  loginUser(user: User) {
    return this.http.post<any>(this.loginUserurl, user, { observe: 'response' });
  }
  

  isLoggedIn() {
    let token = localStorage.getItem("myToken");

    if (token) {
      return true
    }
    else {
      return false
    }
  }


}