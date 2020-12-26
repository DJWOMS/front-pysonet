import { Injectable } from '@angular/core';
import {BaseService} from '../../app/services/base-service';
import {EditProfile, Profile} from '../models/profile';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile>{
  protected url = 'api/v1/profile';

  update(model: EditProfile, id?: number): Observable<EditProfile> {
    return this.http.put<EditProfile>(`${environment.url}/${this.url}/`, model);
  }
}
