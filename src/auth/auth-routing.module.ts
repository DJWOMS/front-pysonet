import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginLayoutComponent} from './layout/login-layout/login-layout.component';
import {VerifyComponent} from './verify/verify.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      {
        path: '', component: LoginLayoutComponent,
        children: [
          {
            path: 'login', component: LoginComponent
          },
          {
            path: 'registration', component: RegistrationComponent
          }
        ]
      },
      {
        path: 'activate/:uid/:token', component: VerifyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
