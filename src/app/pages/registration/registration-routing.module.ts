import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'entry',
        pathMatch: 'full'
      },
      {
        path: 'entry',
        component: RegistrationFormComponent
      },
      {
        path: 'create-user',
        component: RegistrationUserComponent
      }
    ]

  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RegistrationRoutingModule { }
