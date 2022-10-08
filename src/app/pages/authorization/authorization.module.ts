import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';

@NgModule({
  declarations: [AuthorizationComponent, AuthorizationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
