import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WallComponent} from './components/wall/wall.component';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {InfoProfileComponent} from './components/info-profile/info-profile.component';

const routes: Routes = [
  {
    path: 'profile', component: BaseLayoutComponent, children: [
      {
        path: '', component: InfoProfileComponent
      },
      {
        path: 'edit', component: EditProfileComponent
      },
      {
        path: 'wall', component: WallComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
