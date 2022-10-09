import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileWindowComponent } from './profile-window/profile-window.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileWindowComponent, ProfileCardComponent, ProfileComponent],
  exports: [ProfileWindowComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
  ]
})
export class ProfileModule { }
