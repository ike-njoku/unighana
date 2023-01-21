import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'notifications', loadChildren: () => import('./pop-up-notifications/pop-up-notifications.module').then(m => m.PopUpNotificationsModule) }, { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, { path: 'svg', loadChildren: () => import('./register-svg/register-svg.module').then(m => m.RegisterSvgModule) }, { path: 'form-field', loadChildren: () => import('./shared/form-field/form-field.module').then(m => m.FormFieldModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
