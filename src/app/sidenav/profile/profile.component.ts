import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User> = this.store.select(state => state.user);

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit() {
    this.store.dispatch({ type: '[User Profile] Get User' });
  }

}
