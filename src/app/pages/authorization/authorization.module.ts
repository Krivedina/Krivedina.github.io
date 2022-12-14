import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorizationComponent, AuthorizationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthorizationRoutingModule,
  ]
})
export class AuthorizationModule { }
