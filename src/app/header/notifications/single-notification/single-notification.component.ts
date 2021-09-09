import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeInAndOut } from 'src/app/transition-animations';
import { Notification } from 'src/app/_models/interfaces';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-single-notification',
  templateUrl: './single-notification.component.html',
  styleUrls: ['./single-notification.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ]),
  ]
})
export class SingleNotificationComponent implements OnInit {
  @Input() notification: Notification | undefined;
  fadeOutNotification = false; // show notification by default

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  deleteNotification(id: any): void {
    // animate notification leaving, then delete
    this.fadeOutNotification = true; // fade out notification

    setTimeout(
      () => {
        this.notificationService.delete(id);
      }, 400);
  }

}
