import {ComponentFactoryResolver, ComponentRef, Directive, OnDestroy, OnInit, Optional, Self, ViewContainerRef} from '@angular/core';
import {NgControl} from '@angular/forms';
import {EMPTY, merge, Observable, Subscription} from 'rxjs';
import {ControlErrorComponent} from './control-error.component';
import {FormSubmitDirective} from './form-submit.directive';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  sub: Subscription;
  ref: ComponentRef<ControlErrorComponent>;

  errors = {
    required: () => 'This field is fucking required',
    minlength: ({requiredLength, actualLength}) => `Expect ${requiredLength} but got ${actualLength}`
  };
  private submit$: Observable<Event>;

  constructor(@Self() private controlDir: NgControl,
              @Optional() private form: FormSubmitDirective,
              private vcr: ViewContainerRef,
              private resolver: ComponentFactoryResolver) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    this.sub =
      merge(
        this.submit$,
        this.control.valueChanges)
        .subscribe(() => {
          const controlErrors = this.control.errors;
          if (controlErrors) {
            const firstKey = Object.keys(controlErrors)[0];
            const getError = this.errors[firstKey];

            if (!getError) {
              return;
            }

            const text = getError(controlErrors[firstKey]);
            this.setError(text);
          } else if (this.ref) {
            this.setError(null);
          }
        });
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
