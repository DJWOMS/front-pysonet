import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Login, Registration, Token, Verify} from './models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<Token> {
    return this.http.post<Token>(`${environment.url}/auth/jwt/create/`, model);
  }

  registration(model: Registration): Observable<any> {
    return this.http.post<any>(`${environment.url}/auth/users/`, model);
  }

  verify(model: Verify): Observable<any> {
    return this.http.post<any>(`${environment.url}/auth/users/activation/`, model);
  }

}
