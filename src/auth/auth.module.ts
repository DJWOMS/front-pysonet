import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
