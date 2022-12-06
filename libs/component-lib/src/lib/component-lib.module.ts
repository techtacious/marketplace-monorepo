import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserAvatarComponent],
  exports: [UserAvatarComponent],
})
export class ComponentLibModule {}
