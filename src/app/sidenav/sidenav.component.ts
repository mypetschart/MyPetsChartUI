import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../_services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) public sidenav!: MatSidenav;

  mode = 'over';
  opened = true;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    // Set the sidenav type based on the screen size
    if (window.screen.width <= 600) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
    }
  }

  ngAfterViewInit(): void{
    // Set the sidenav in the service so other components can access it
    this.sidenavService.setSidenav(this.sidenav);
  }

  // Then add a listener to be able to change sidenav type dynamically is someone resizes a window or tilts a phone or such
  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth <= 600) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
      this.sidenav?.open();
    }
  }
}
