import { Injectable } from '@angular/core';
import {BaseService} from '../../app/services/base-service';
import {Profile} from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<Profile>{
  protected url = 'api/v1/profile';
}
