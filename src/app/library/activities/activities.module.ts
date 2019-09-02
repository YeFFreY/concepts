import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivitiesRoutingModule} from './activities-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ActivityService} from './activity.service';


@NgModule({
  declarations: [ActivitiesRoutingModule.components],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule
  ],
  providers: [
    ActivityService
  ]
})
export class ActivitiesModule {
}
