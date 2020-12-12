import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [WallComponent, EditProfileComponent, BaseLayoutComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
