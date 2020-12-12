import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  aSub: Subscription;
  errorRes: object | null = null;
  id = 1;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(8)]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      middle_name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      bio: [null],
      github: [null],
      birthday: [null],
      gender: [null],
      technology: this.fb.array([1]), // this.fb.array([null, [Validators.required]]),
    });
  }

  submit(): void {
    this.aSub = this.profileService.put(this.form.value, this.id).subscribe(
      res => alert('Save'),
      error => console.log(error.error)
    );
  }
}
