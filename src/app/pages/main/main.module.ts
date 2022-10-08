import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainRoutingModule } from './main-routing.module';
import { IconModule } from 'src/app/shared/icon';
import { RouterModule } from '@angular/router';

const components = [MainComponent, MainHeaderComponent, MainBodyComponent, MainFooterComponent];

@NgModule({
  declarations: components,
  exports: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    IconModule,
    RouterModule
  ]
})
export class MainModule { }
