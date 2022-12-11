import { Component, OnInit } from '@angular/core';
import { User } from '@marketplace-monorepo/openapi';
import { Store } from '@ngrx/store';
import { ButtonType, ColorTheme } from '../../shared/enums';
import * as fromAuth from '../../state/auth/auth.reducer';
import * as fromUser from '../../state/user/user.reducer';
import * as UserActions from '../../state/user/user.actions';

@Component({
  selector: 'marketplace-monorepo-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  user$ = this.authStore.select(fromAuth.selectUser);
  userState$ = this.userStore.select(fromUser.selectUserState);

  updatedUser: User = {
    firstName: '',
    lastName: '',
  };

  constructor(
    private authStore: Store<fromAuth.State>,
    private userStore: Store<fromUser.State>
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => (this.updatedUser = { ...user }));
  }

  updateBtnClicked(): void {
    this.userStore.dispatch(
      UserActions.updateUserRequest({ user: this.updatedUser })
    );
  }

  handleInputChange(event: any, elemName: string): void {}
}
