import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-activity-skills-form',
  template: `
      <ng-container [formGroup]="skillsForm">
          <div formArrayName="activitySkills"
               *ngFor="let activitySkill of activitySkills.controls; let i=index;">
              <div [formGroupName]="i">
                  <label attr.for="{{'skill' + i}}">Skill</label>
                  <input id="{{'skill' + i}}" type="text" formControlName="skill">
                  <label>Level</label>
                  <input type="text" formControlName="level">
              </div>
          </div>
          <button class="p-4 bg-blue-500 text-white" type="button" (click)="addSkill($event)">Add Skill</button>

      </ng-container>
  `,
  styleUrls: ['./activity-skills-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActivitySkillsFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ActivitySkillsFormComponent),
      multi: true,
    }
  ]
})
export class ActivitySkillsFormComponent implements OnInit, ControlValueAccessor, Validator {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.skillsForm = this.fb.group({
      activitySkills: this.fb.array([this.buildActivitySkill()])
    });
  }

  get activitySkills(): FormArray {
    return this.skillsForm.get('activitySkills') as FormArray;
  }

  buildActivitySkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
      level: ''
    });
  }

  addSkill(e) {
    this.activitySkills.push(this.buildActivitySkill());
  }

  registerOnChange(fn: any): void {
    this.skillsForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.skillsForm.valueChanges.subscribe(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.skillsForm.valid ? null : {activitySkills: {valid: false}};
  }

  writeValue(obj: any): void {
    console.log(obj);
  }

}
