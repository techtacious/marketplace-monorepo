import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType, ColorTheme } from '../../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(route: string): void {
    this.router.navigateByUrl(route);
  }
}
