import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserService } from '@marketplace-monorepo/openapi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) =>
        this.authService
          .login(action.credentials.email, action.credentials.password)
          .pipe(
            map((loginSuccessResponse) =>
              AuthActions.loginSuccess({ loginSuccessResponse })
            ),
            catchError((error) => of(AuthActions.loginFailure({ error })))
          )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ loginSuccessResponse }) => {
          this.router.navigateByUrl('/');
          alert(
            'Login Successful! ' +
              'Welcome, ' +
              loginSuccessResponse.user.firstName
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}
}
