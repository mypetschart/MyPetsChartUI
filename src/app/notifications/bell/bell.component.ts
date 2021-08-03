import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss']
})
export class BellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNotifications(): void {
    console.log('opened notifications');
  }

}
