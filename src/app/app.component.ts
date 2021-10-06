import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSidenav } from '@angular/material/sidenav';
import jwt_decode from 'jwt-decode';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayHeader = true;
  token = '';

  title = 'my-pets-chart';

  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('dog', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dog.svg'));
    iconRegistry.addSvgIcon('paw', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/paw-dashboard.svg'));
    iconRegistry.addSvgIcon('dog-house', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dog-house.svg'));
    iconRegistry.addSvgIcon('contact', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/contacts.svg'));
    iconRegistry.addSvgIcon('report', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/reports.svg'));
    iconRegistry.addSvgIcon('message', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/messages.svg'));
    iconRegistry.addSvgIcon('task', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tasks.svg'));
    iconRegistry.addSvgIcon('setting', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'));
  }
  
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch (Error){
        return null;
    }
  }

  ngOnInit() {
    this.token = this.getDecodedAccessToken(environment.jwt);
    console.log(this.token);

    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        if (e.url.includes('/onboarding')) {
            this.displayHeader = false;
        } else {
            this.displayHeader = true;
        }
      }
    });
  }
}
