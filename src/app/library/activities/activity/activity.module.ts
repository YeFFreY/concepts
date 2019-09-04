import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivityRoutingModule} from './activity-routing.module';
import {ActivityService} from './activity.service';
import {ActivityResolverService} from './activity-resolver.service';


@NgModule({
  declarations: [ActivityRoutingModule.components],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ],
  providers: [
    ActivityService,
    ActivityResolverService
  ]
})
export class ActivityModule {
}
