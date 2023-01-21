import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSvgComponent } from './register-svg.component';

const routes: Routes = [{ path: '', component: RegisterSvgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterSvgRoutingModule { }
