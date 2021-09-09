import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../_services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidenavToggle = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
		this.sidenavToggle = !this.sidenavToggle;
		this.sidenavService.toggle();
	}

}
