import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Login, Registration, Token} from './models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<Token> {
    return this.http.post<Token>(`${environment.url}/auth/jwt/create/`, model);
  }

}
