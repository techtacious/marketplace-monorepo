import { createReducer, on } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import {
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess,
} from './user.actions';

export interface State {
  updateUserRequestInProgress: boolean;
  updateUserError: string;
  updateUserSuccess: boolean;
}

export const initialState: State = {
  updateUserRequestInProgress: false,
  updateUserError: null,
  updateUserSuccess: null,
};

const _userReducer = createReducer(
  initialState,
  on(updateUserRequest, (state) => {
    return {
      ...state,
      updateUserRequestInProgress: true,
      updateUserError: null,
      updateUserSuccess: null,
    };
  }),
  on(updateUserSuccess, (state, { user }) => {
    return {
      ...state,
      updateUserRequestInProgress: true,
      updateUserError: null,
      updateUserSuccess: true,
    };
  }),
  on(updateUserFailure, (state, { error }) => {
    return {
      ...state,
      updateUserRequestInProgress: true,
      updateUserError: error,
      updateUserSuccess: null,
    };
  })
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}

export const selectUserState = createFeatureSelector<State>('user');
