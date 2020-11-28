import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent, RegistrationComponent, LoginLayoutComponent, VerifyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
