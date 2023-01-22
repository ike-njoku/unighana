import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, { path: 'loader', loadChildren: () => import('./loader/loader.module').then(m => m.LoaderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
