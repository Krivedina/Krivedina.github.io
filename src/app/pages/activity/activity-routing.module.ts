import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';


const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      {
        path: 'course-list',
        loadChildren: () => import('./../course/course.module').then(m => m.CourseModule)
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./../marketplace/marketplace.module').then(m => m.MarketplaceModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./../community/community.module').then(m => m.CommunityModule)
      },
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
export class ActivityRoutingModule { }
