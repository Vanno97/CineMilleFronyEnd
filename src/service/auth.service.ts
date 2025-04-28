import { Injectable } from '@angular/core';
import {environments} from '../environments/environments';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../dto/login-request';
import {Observable} from 'rxjs';
import {LoginResponse} from '../dto/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environments.backendUrl;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl + "auth/login", loginRequest);
  }

  validate(token: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "auth/validate/" + token, null);
  }
}
