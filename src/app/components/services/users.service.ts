//users.service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  private apiServer = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  create(data: User): Observable<User> {
    return this.http.post<User>(`${this.apiServer}/users`, data);
  }
  
  update(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${this.apiServer}/users/${id}`, data);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServer}/users/${id}`);
  }
  
  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServer}/users`);
  }
  
  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiServer}/users/${id}`);
  }
}

