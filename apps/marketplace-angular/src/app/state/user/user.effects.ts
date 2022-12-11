import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserService } from '@marketplace-monorepo/openapi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  updateUserRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserRequest),
      exhaustMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map((user) => UserActions.updateUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserFailure({ error: error?.error }))
          )
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(({ user }) => {
          // this.router.navigateByUrl('/');
          alert('Updated Profile! ');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}
