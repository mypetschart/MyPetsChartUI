import { Action, createReducer, on } from '@ngrx/store';
import { UserBuilder } from 'src/app/_models/builders/user.builder';
import { User } from 'src/app/_models/interfaces';
import { loadUser } from './user.actions';

// export interface State {
//   user: User;
// }

export const initialState: User = new UserBuilder().build();

const userProfileReducer = createReducer(
  initialState,
  on(loadUser, (state, user) => ({
    ...user
  }))
);

export function reducer(state: User | undefined, action: Action) {
  return userProfileReducer(state, action);
}
