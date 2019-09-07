import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlErrorsDirective} from './error/control-errors.directive';
import {ControlErrorComponent} from './error/control-error.component';
import {FormSubmitDirective} from './error/form-submit.directive';


@NgModule({
  declarations: [ControlErrorsDirective, ControlErrorComponent, FormSubmitDirective],
  imports: [
    CommonModule
  ],
  entryComponents: [ControlErrorComponent],
  exports: [ControlErrorsDirective, FormSubmitDirective]
})
export class SharedModule { }
