import { User } from '@marketplace-monorepo/openapi';
import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from './auth.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  token: string;
  user: User;
  loginError?: string;
}

export const initialState: State = {
  token: null,
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { loginSuccessResponse }) => {
    return {
      ...state,
      token: loginSuccessResponse.token,
      user: loginSuccessResponse.user,
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      token: null,
      user: null,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      token: null,
      user: null,
    };
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);
