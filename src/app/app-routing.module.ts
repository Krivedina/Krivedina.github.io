import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    children: [
      // path: 'main',
      // loadChildren =() =>
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
