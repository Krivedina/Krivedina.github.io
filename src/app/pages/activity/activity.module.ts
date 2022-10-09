import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { CourseModule } from '../course/course.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    RouterModule,
  ]
})
export class ActivityModule { }
