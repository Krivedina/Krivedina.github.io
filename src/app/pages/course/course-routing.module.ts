import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseStepComponent } from './course-step/course-step.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: 'course-page-1',
    component: CoursePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
      },
      {
        path: 'start',
        component: CourseDescriptionComponent
      },
      {
        path: 'step/:stepNumber',
        component: CourseStepComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseRoutingModule { }
