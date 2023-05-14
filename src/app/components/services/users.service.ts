import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  private apiServer = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.apiServer + '/users', data);
  }
  
  update(id: number, data: any): Observable<any> {
    return this.http.put(this.apiServer + '/users/' + id, data);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(this.apiServer + '/users/' + id);
  }
  
  findAll(): Observable<any> {
    return this.http.get(this.apiServer + '/users');
  }
  
  findById(id: number): Observable<any> {
    return this.http.get(this.apiServer + '/users' + id);
  }
}
