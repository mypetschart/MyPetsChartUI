import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  mode = 'over';
  opened = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('dogs', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dogs-sidebar-icon.svg'));
  }

  ngOnInit(): void {
    console.log(window.screen.width);
    if (window.screen.width <= 600) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
    }
  }
}
