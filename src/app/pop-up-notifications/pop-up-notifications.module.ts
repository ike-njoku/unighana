import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopUpNotificationsRoutingModule } from './pop-up-notifications-routing.module';
import { PopUpNotificationsComponent } from './pop-up-notifications.component';


@NgModule({
  declarations: [
    PopUpNotificationsComponent
  ],
  imports: [
    CommonModule,
    PopUpNotificationsRoutingModule
  ]
})
export class PopUpNotificationsModule { }
