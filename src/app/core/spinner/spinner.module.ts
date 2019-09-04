import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerService} from './spinner.service';
import {SpinnerComponent} from './spinner.component';


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [
    SpinnerService
  ]
})
export class SpinnerModule {
}
