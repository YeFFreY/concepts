import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibraryRoutingModule} from './library-routing.module';


@NgModule({
  declarations: [LibraryRoutingModule.components],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule {
}
