import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ButtonComponent } from '../components/button/button.component';
import { LogoComponent } from '../components/logo/logo.component';
import { PostCardComponent } from '../components/post-card/post-card.component';
import { ComponentLibModule } from '@market-monorepo/component-lib';
@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    PostCardComponent,
  ],
  imports: [CommonModule, ComponentLibModule],
  exports: [HeaderComponent, ButtonComponent, LogoComponent, PostCardComponent],
})
export class SharedModule {}
