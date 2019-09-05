import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateRoutingModule} from './create-routing.module';
import {ActivityService} from './activity.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateRoutingModule.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule,
  ],
  providers: [
    ActivityService
  ]
})
export class CreateModule {
}
