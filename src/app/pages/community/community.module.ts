import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { CommunityRoutingModule } from './community-routing.module';



@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
