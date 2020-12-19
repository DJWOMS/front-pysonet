import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected url: string;
  protected params: HttpParams;

  constructor(protected http: HttpClient) {
  }

  get(params?: HttpParams): Observable<[T]> {
    return this.http.get<[T]>(`${environment.url}/${this.url}/`, {params: params});
  }

  get_list(id: number, params?: HttpParams): Observable<[T]> {
    return this.http.get<[T]>(`${environment.url}/${this.url}/${id}`, {params: params});
  }

  get_single(id: number): Observable<T> {
    return this.http.get<T>(`${environment.url}/${this.url}/${id}/`);
  }

  post(model: T): Observable<T> {
    return this.http.post<T>(`${environment.url}/${this.url}/`, model);
  }

  put(model: T, id?: number): Observable<T> {
    return this.http.put<T>(`${environment.url}/${this.url}/${id}/`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}/${this.url}/${id}/`);
  }
}
