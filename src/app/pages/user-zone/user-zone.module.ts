import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserZoneRoutingModule } from './user-zone-routing.module';
import { UserZoneHeaderComponent } from './user-zone-header/user-zone-header.component';
import { UserZoneComponent } from './user-zone.component';
import { ProfileModule } from '../profile/profile.module';



@NgModule({
  declarations: [UserZoneComponent, UserZoneHeaderComponent],
  imports: [
    CommonModule,
    UserZoneRoutingModule,
    ProfileModule
  ]
})
export class UserZoneModule { }
