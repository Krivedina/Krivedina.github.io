import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserZoneComponent } from './user-zone.component';

const routes: Routes = [
  {
    path: '',
    component: UserZoneComponent,
    children: [
      {
        path:'',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule)
      }
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
