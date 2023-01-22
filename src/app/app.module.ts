import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiGatewayService } from './api-gateway.service';
import { NotificationService } from './pop-up-notifications/notification.service';
import { PopUpNotificationsModule } from './pop-up-notifications/pop-up-notifications.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PopUpNotificationsModule
  ],
  providers: [
    ApiGatewayService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
