import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthLoginResponse,
  AuthService,
  User,
} from '@marketplace-monorepo/openapi';
import { ButtonType, ColorTheme } from '../../shared/enums';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  user: User = {};

  constructor(private store: Store) {}

  ngOnInit(): void {}

  async signinBtnClicked(): Promise<any> {
    const credentials = {
      email: this.user.email,
      password: this.user.password,
    };

    this.store.dispatch(AuthActions.loginRequest({ credentials }));
  }
}
