import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserZoneComponent } from './user-zone.component';

const routes: Routes = [
  {
    path: '',
    component: UserZoneComponent,
    children: [
      // {
      //   path: 'profile',
      //   component:
      // }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserZoneRoutingModule { }
