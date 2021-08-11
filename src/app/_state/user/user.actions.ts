import { createAction, props } from '@ngrx/store';
import { User } from '../../_models/interfaces';

export const getUserLoading = createAction(
    '[User Profile] Get User',
    props<{userId: string}>()
);

export const loadUser = createAction(
    '[User Profile] Load User',
    props<User>()
);
