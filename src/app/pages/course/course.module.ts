import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseComponent } from './course.component';
import { RouterModule } from '@angular/router';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CoursePathComponent } from './course-path/course-path.component';
import { CourseRoutingModule } from './course-routing.module';
import { CourseStepComponent } from './course-step/course-step.component';
import { ActivityRoutingModule } from '../activity/activity-routing.module';

const components = [
  CourseCardComponent,
  CoursePageComponent,
  CourseComponent,
  CourseDescriptionComponent,
  CoursePathComponent,
  CourseStepComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
