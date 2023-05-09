import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:3000'

  constructor( private http: HttpClient, private rou: Router) { }

  register(user: User) {
    /* let requser={
      "email": user.email,
      "password":user.password,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "age": user.age
    } */
    return this.http.post(this.URL + '/users', user);
  }
  login(email: string, password: string) {
    // const { email, password } = user
    return this.http.post(this.URL + '/signin', {email, password});
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.rou.navigate(['/login'])
  }
}
