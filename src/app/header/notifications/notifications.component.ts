import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../../_services/notification.service';
import { Notification } from '../../_models/interfaces';
import { fadeIn } from '../../transition-animations';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [fadeIn]
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<Notification[]>;
  loadingNotifications$: Observable<boolean>;
  notificationBadgeNum$: Observable<number>;

  hideDrawer = true;
  bellClick = false;
  hideBadge = true;

  constructor(
    private notificationService: NotificationService,
    private renderer: Renderer2
    ) {
    this.loadingNotifications$ = this.notificationService.loading$;
    this.notifications$ = this.notificationService.entities$;
    this.notificationBadgeNum$ = this.notificationService.count$;

    // Watch for clicks OFF of notification drawer to close it
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.bellClick) {
        this.hideDrawer = true;
      }
      this.bellClick = false;
    });
  }

  ngOnInit(): void {
    this.notificationService.getAll();

    this.notificationBadgeNum$.subscribe(
      num => {
        if (num > 0) {
          this.hideBadge = false;
        } else {
          this.hideBadge = true;
        }
      }
    );
  }

  onBellClick(): void {
    // toggle drawer
    this.hideDrawer = !this.hideDrawer;

    // recheck for notifications if necessary
    if (this.hideDrawer === false) {
      this.notificationService.getAll();
    }
  }

  preventCloseOnClick(): void {
    this.bellClick = true;
  }
}
