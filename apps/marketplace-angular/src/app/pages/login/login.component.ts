import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthLoginResponse,
  AuthService,
  User,
} from '@marketplace-monorepo/openapi';
import { ButtonType, ColorTheme } from '../../shared/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  user: User = {};

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  async signinBtnClicked(): Promise<any> {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response: AuthLoginResponse) => {
        alert('Login Successful!' + response.user.firstName);
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
