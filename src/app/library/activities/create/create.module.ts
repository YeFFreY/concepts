import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateRoutingModule} from './create-routing.module';


@NgModule({
  declarations: [CreateRoutingModule.components],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule {
}
