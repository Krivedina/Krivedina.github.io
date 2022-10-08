import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { RegistrationUserComponent } from './registration-user/registration-user.component';



@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent, RegistrationUserComponent],
  exports: [RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
