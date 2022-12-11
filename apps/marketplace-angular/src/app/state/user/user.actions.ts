import { User } from '@marketplace-monorepo/openapi';
import { createAction, props } from '@ngrx/store';

export const updateUserRequest = createAction(
  '[User] Update User Request',
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Failure',
  props<{ error: string }>()
);
