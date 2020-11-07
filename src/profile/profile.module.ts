import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [WallComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSliderModule
  ]
})
export class ProfileModule { }
