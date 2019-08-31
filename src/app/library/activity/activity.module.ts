import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivityRoutingModule} from './activity-routing.module';


@NgModule({
  declarations: [ActivityRoutingModule.components],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule {
}
