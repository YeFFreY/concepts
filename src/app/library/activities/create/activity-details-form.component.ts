import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-activity-details-form',
  template: `
      <ng-container [formGroup]="basicInfoForm">
          <div>
              <label>Title</label>
              <input type="text" formControlName="title">
          </div>
          <div>
              <label>Overview</label>
              <input type="text" formControlName="overview">
          </div>
      </ng-container>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActivityDetailsFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ActivityDetailsFormComponent),
      multi: true,
    }
  ]
})
export class ActivityDetailsFormComponent implements OnInit, ControlValueAccessor, Validator {
  basicInfoForm: FormGroup;
  onChange: any = () => {
  };

  constructor(private fb: FormBuilder) {
  }

  get title() {
    return this.basicInfoForm.get('title');
  }

  ngOnInit() {
    this.basicInfoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      overview: ''
    }, {updateOn: 'blur'});
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.basicInfoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.basicInfoForm.valueChanges.subscribe(fn);
  }

  writeValue(obj: any): void {
    if (!obj) {
      return;
    }
    this.basicInfoForm.patchValue(obj, {emitEvent: false});
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.basicInfoForm.valid ? null : {details: {valid: false}};
  }

}
