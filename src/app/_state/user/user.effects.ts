import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import jwt_decode from 'jwt-decode';
import { EMPTY } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { UserBuilder } from 'src/app/_models/builders/user.builder';
import { UserService } from 'src/app/_services/user.service';
import { environment } from 'src/environments/environment';
import { getUserLoading, loadUser } from './user.actions';

@Injectable()
export class UserEffects {
    // Attempt to decode JWT - TODO
    // token = JSON.parse(jwt_decode(environment.jwt));
    // user = new UserBuilder()
    // .id(this.token.id)
    // .businessName(this.token.businessName)
    // .build();

    // loadUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(loadUser),
    //     exhaustMap(() => this.userService.get('1').pipe(
    //             map(user => loadUser(this.user)),
    //             catchError(() => EMPTY)
    //             )
    //         )
    //     )
    // );

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(getUserLoading),
    exhaustMap(() => this.userService.get('1').pipe(
        map(user => loadUser(user)),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
