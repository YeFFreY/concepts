import {Directive, ElementRef} from '@angular/core';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

@Directive({
  selector: 'form'
})
export class FormSubmitDirective {
  submit$ = fromEvent(this.element, 'submit').pipe(
    tap(() => {
      if (this.element.classList.contains('submitted') === false) {
        this.element.classList.add('submitted');
      }
    }),
    // if enabled the shareReplay will add the error on any field added dynamically after the attempt to submit has been done
    // shareReplay(1)
  );

  constructor(private host: ElementRef<HTMLFormElement>) {
  }

  get element() {
    return this.host.nativeElement;
  }
}
