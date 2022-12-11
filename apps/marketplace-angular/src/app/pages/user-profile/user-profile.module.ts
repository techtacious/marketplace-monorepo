import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, UserProfileRoutingModule, SharedModule, FormsModule],
})
export class UserProfileModule {}
