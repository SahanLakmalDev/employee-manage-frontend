import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type User = {
  username:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_BASE_URL = 'http://localhost:8080/api/v1/login';

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.API_BASE_URL}`, user);
  }
}
