import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  public from: string = '';
  public userSubject = new BehaviorSubject<User | null>(null);
  public userValue: User | null = null;
  private config = { apiUrl: 'http://localhost:3000' };

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.userValue = JSON.parse(storedUser);
      this.userSubject.next(this.userValue);
    }
  }

  login(email: string, password: string) {
    return this.http.get<User[]>(`${this.config.apiUrl}/users?email=${email}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            const user = users[0];
            const passwordHash = btoa(password); // Encriptar la contraseña ingresada en el formulario de inicio de sesión
            if (user.password === passwordHash) { // Verificar la contraseña encriptada con la almacenada en la base de datos
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.userValue = user;
              this.userSubject.next(user);
              return user;
            } else {
              return null;
            }
          } else {
            return null;
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userValue = null;
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  fromContact() {
    this.from = 'contact';
  }

  lastPageVisited() {
    return this.from;
  }
}








