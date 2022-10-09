import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './authorization.service';



@NgModule({
  declarations: [],
  providers: [AuthorizationService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AppServiceModule { }
