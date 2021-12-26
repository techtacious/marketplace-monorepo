import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { CategorySectionComponent } from "./category-section/category-section.component";
import { SharedModule } from "../../shared/shared/shared.module";

@NgModule({
  declarations: [LandingComponent, CategorySectionComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
