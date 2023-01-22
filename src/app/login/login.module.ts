import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoaderModule } from '../loader/loader.module';
import { RegisterSvgModule } from '../register-svg/register-svg.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoaderModule,
    RegisterSvgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
