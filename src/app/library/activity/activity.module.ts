import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivityRoutingModule} from './activity-routing.module';
import {ActivityService} from './activity.service';


@NgModule({
  declarations: [ActivityRoutingModule.components],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ],
  providers: [
    ActivityService
  ]
})
export class ActivityModule {
}
