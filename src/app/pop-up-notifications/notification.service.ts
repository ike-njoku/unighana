import { Injectable } from '@angular/core';
import { NotificationType } from './notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  message: string = ''
  notificationType: string = '';

  pushMessage(message: string, duration?: number, notificationType?: NotificationType): void {
    this.clearNotifications();
    this.message = message;
    this.notificationType = notificationType || 'info'
    if (duration) setTimeout(() => this.clearNotifications(), duration);
  }

  clearNotifications(): string {
    return this.message = '';
  }
}
