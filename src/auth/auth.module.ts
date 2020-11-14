import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent, RegistrationComponent, LoginLayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AuthModule { }
