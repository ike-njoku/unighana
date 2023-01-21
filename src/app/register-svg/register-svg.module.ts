import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterSvgRoutingModule } from './register-svg-routing.module';
import { RegisterSvgComponent } from './register-svg.component';


@NgModule({
  declarations: [
    RegisterSvgComponent
  ],
  imports: [
    CommonModule,
    RegisterSvgRoutingModule
  ],
  exports: [
    RegisterSvgComponent
  ]
})
export class RegisterSvgModule { }
