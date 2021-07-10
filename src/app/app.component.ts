import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-pets-chart';

  constructor() {
    console.log(environment.jwt);
  }
}
