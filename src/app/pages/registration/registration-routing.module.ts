import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RegistrationRoutingModule { }
