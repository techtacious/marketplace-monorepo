import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonType, ColorTheme } from '../../enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('title') title!: string;
  @Input('type') type!: string;
  @Input('buttonSizeType') buttonSizeType!: ButtonType;
  @Input('colorTheme') colorTheme!: ColorTheme;

  @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();

  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  constructor() {}

  ngOnInit(): void {}
}
