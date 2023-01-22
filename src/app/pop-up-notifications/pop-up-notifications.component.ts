import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-pop-up-notifications',
  templateUrl: './pop-up-notifications.component.html',
  styleUrls: ['./pop-up-notifications.component.css']
})
export class PopUpNotificationsComponent implements OnInit {

  constructor(
    public notificationService: NotificationService
  ) { }

  message!: string;
  notificationType!: string;

  clearNotification(): string {
    return this.notificationService.clearNotifications();
  }

  ngOnInit(): void {
    this.message = this.notificationService.message;
    this.notificationType = this.notificationService.notificationType;
  }

}
