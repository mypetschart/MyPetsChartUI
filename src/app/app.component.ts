import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSidenav } from '@angular/material/sidenav';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayHeader = true;
  token = '';

  title = 'my-pets-chart';

  constructor(private router: Router) { }
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
