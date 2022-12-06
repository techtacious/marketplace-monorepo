import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marketplace-monorepo-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input('userImgSrc') userImgSrc: string = '';
  @Input('userName') userName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
