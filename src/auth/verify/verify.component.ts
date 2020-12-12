import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Verify} from '../models';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  confirm = false;
  verify: Verify;
  ver = {token: '', uid: ''};
  aSub: Subscription;
  rSub: Subscription;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.token);
    this.ver.token = this.route.snapshot.params.token;
    this.ver.uid = this.route.snapshot.params.uid;
  }

  ngOnInit(): void {
    this.send();
  }

  send(): void {
    this.aSub = this.authService.verify(this.ver).subscribe(
      res => this.confirm = true,
      error => this.confirm = false
    );
  }
}
