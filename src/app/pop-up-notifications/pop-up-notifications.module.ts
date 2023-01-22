import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopUpNotificationsRoutingModule } from './pop-up-notifications-routing.module';
import { PopUpNotificationsComponent } from './pop-up-notifications.component';
import { NotificationService } from './notification.service';


@NgModule({
  declarations: [
    PopUpNotificationsComponent
  ],
  imports: [
    CommonModule,
    PopUpNotificationsRoutingModule
  ],
  providers: [
    NotificationService
  ],
  exports: [
    PopUpNotificationsComponent
  ]
})
export class PopUpNotificationsModule { }
