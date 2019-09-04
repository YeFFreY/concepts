import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivitiesOverviewRoutingModule} from './activities-overview-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ActivityService} from './activity.service';


@NgModule({
  declarations: [ActivitiesOverviewRoutingModule.components],
  imports: [
    CommonModule,
    ActivitiesOverviewRoutingModule,
    SharedModule
  ],
  providers: [
    ActivityService
  ]
})
export class ActivitiesOverviewModule {
}
