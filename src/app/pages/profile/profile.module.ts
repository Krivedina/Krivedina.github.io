import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileWindowComponent } from './profile-window/profile-window.component';

@NgModule({
  declarations: [ProfileWindowComponent],
  exports: [ProfileWindowComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
