import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WallComponent} from './components/wall/wall.component';

const routes: Routes = [
  {
    path: 'wall', component: WallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
