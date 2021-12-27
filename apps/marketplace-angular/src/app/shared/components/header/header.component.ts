import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType, ColorTheme } from '../../enums';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../state/auth/auth.reducer';
import * as AuthActions from '../../../state/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  jwtToken$ = this.store.select(fromAuth.selectToken);
  user$ = this.store.select(fromAuth.selectUser);

  constructor(private router: Router, private store: Store<fromAuth.State>) {}

  ngOnInit(): void {}

  navigate(route: string): void {
    this.router.navigateByUrl(route);
  }

  signOutClicked(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
