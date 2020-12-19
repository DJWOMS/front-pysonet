import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Profile} from '../../models/profile';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.css']
})
export class InfoProfileComponent implements OnInit {
  aSub: Subscription;
  userInfo: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getInfoProfile();
  }

  getInfoProfile(): void {
    this.aSub = this.profileService.get_single(1).subscribe(
      res => this.userInfo = res,
      error => console.log(error)
    );
  }

}
