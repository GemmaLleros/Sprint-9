import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_DATA = 'userData';

  constructor() { }

  saveUser(user: { email: string, password: string }): void {
    localStorage.setItem(this.USER_DATA, JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem(this.USER_DATA) || '{}');
    if (user.email === email && user.password === password) {
      this.saveUser(user);
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem(this.USER_DATA) || '{}');
    return user.email !== undefined;
  }
}
