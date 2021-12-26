import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType, ColorTheme } from '../../shared/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async signinBtnClicked(): Promise<any> {}
}
