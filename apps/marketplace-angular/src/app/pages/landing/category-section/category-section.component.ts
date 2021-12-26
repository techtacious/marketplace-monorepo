import { Component, Input, OnInit } from "@angular/core";
import { Category } from "../../../shared/definitions";
import { ButtonType, ColorTheme } from "../../../shared/enums";

@Component({
  selector: "app-category-section",
  templateUrl: "./category-section.component.html",
  styleUrls: ["./category-section.component.scss"],
})
export class CategorySectionComponent implements OnInit {
  @Input("category") category!: Category;

  buttonTypes = ButtonType;
  colorThemes = ColorTheme;

  constructor() {}

  ngOnInit(): void {}
}
