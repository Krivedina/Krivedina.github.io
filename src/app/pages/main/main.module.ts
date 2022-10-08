import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { MainBodyTopComponent } from './main-body/main-body-top/main-body-top.component';
import { MainBodyMiddleComponent } from './main-body/main-body-middle/main-body-middle.component';
import { MainBodyBottomComponent } from './main-body/main-body-bottom/main-body-bottom.component';
import { BodyMiddleScaleComponent } from './main-body/main-body-middle/body-middle-scale/body-middle-scale.component';
import { BodyMiddlePromoComponent } from './main-body/main-body-middle/body-middle-promo/body-middle-promo.component';
import { BodyMiddleActivityComponent } from './main-body/main-body-middle/body-middle-activity/body-middle-activity.component';
import { RegistrationModule } from '../registration/registration.module';

const components = [
  MainComponent,
  MainHeaderComponent,
  MainBodyComponent,
  MainFooterComponent,
  MainBodyTopComponent,
  MainBodyMiddleComponent,
  MainBodyBottomComponent,
  BodyMiddleScaleComponent,
  BodyMiddlePromoComponent,
  BodyMiddleActivityComponent
];

@NgModule({
  declarations: components,
  exports: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    RegistrationModule
  ]
})
export class MainModule { }
