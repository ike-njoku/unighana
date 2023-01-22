import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterSvgModule } from '../register-svg/register-svg.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpNotificationsModule } from '../pop-up-notifications/pop-up-notifications.module';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterSvgModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule
  ]
})
export class RegisterModule { }
