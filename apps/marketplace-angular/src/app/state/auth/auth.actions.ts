import { AuthLoginResponse } from '@marketplace-monorepo/openapi';
import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ credentials: { email: string; password: string } }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginSuccessResponse: AuthLoginResponse }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
