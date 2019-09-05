import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import {ActivityService} from './activity.service';

@Component({
  selector: 'app-activity-create',
  template: `
      <div>
          <h1>New Activity</h1>
          <form (ngSubmit)="save()" [formGroup]="activityForm">
              <div>
                  <label>Title</label>
                  <input type="text" formControlName="title">
              </div>
              <div>
                  <label>Overview</label>
                  <input type="text" formControlName="overview">
              </div>
              <div formArrayName="activitySkills"
              *ngFor="let activitySkill of activitySkills.controls; let i=index;">
                <div [formGroupName]="i">
                    <label attr.for="{{'skill' + i}}">Skill</label>
                    <input id="{{'skill' + i}}" type="text" formControlName="skill">
                    <label>Level</label>
                    <input type="text" formControlName="level">
                </div>
              </div>
              <button type="submit" [disabled]="!activityForm.valid">Save</button>
              <button (click)="populate($event)">Populate</button>
              <button (click)="addSkill($event)">Add Skill</button>
          </form>
          <br>Dirty : {{activityForm.dirty}}
          <br>Touched : {{activityForm.touched}}
          <br>Valid : {{activityForm.valid}}
          <br>Values : {{activityForm.value | json }}
      </div>
  `,
  styleUrls: ['./activity-create.component.scss']
})
export class ActivityCreateComponent implements OnInit {
  activityForm: FormGroup;
  get activitySkills(): FormArray {
    return this.activityForm.get('activitySkills') as FormArray;
  }

  constructor(private fb: FormBuilder, private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      overview: '',
      activitySkills: this.fb.array([this.buildActivitySkill()])
    });

    // on edit, when the data is retrieved, populate the skills would be like (on a specific callback of the httpGet:
/*
    this.activityForm.patchValue({
      title: this.activity.title;
      overview: this.activity.overview
    });
    this.activityForm.setControl('activitySkills', this.fb.array(activity.skills || []));
*/
  }

  buildActivitySkill(): FormGroup {
    return this.fb.group({
      skill: '',
      level: ''
    });
  }

  save() {
    console.log('saving', this.activityForm);
    this.activityService.createActivity(this.activityForm.value).subscribe({
      next: data => console.log('saved and got', data),
      error: err => console.error('not saved because of error', err)
    });
  }

  populate(e) {
    e.preventDefault();
    this.activityForm.patchValue({
      title: 'Populated title',
    });
  }

  addSkill(e) {
    e.preventDefault();
    this.activitySkills.push(this.buildActivitySkill());
  }
}
