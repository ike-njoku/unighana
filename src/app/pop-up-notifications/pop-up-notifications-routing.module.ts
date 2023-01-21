import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopUpNotificationsComponent } from './pop-up-notifications.component';

const routes: Routes = [{ path: '', component: PopUpNotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopUpNotificationsRoutingModule { }
