import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-notifications',
  templateUrl: './pop-up-notifications.component.html',
  styleUrls: ['./pop-up-notifications.component.css']
})
export class PopUpNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('opening')
  }

}
