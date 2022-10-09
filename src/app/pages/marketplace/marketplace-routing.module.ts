import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketplaceRoutingModule { }
