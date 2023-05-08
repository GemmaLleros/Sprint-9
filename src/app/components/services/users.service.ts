import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = 'http://localhost:3000'

  constructor( private http: HttpClient, private rou: Router) { }

  register(user: any) {
    let requser={
      "email": user.email,
      "password":user.password,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "age": user.age
    }
    return this.http.post(this.URL + '/register', requser);
  }
  login(user: any) {
    const requser = {
      email: user.email,
      password: user.password
    };
    return this.http.post(this.URL + '/signin', requser);
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
