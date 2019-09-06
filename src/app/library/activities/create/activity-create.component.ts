import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from './activity.service';
import {Activity} from '../../../shared/interfaces';

@Component({
  selector: 'app-activity-create',
  template: `
      <div>
          <h1>New Activity</h1>
          <form novalidate (ngSubmit)="save(activityForm)" [formGroup]="activityForm">
              <app-activity-details-form formControlName="details"></app-activity-details-form>
              <div formArrayName="activitySkills"
              *ngFor="let activitySkill of activitySkills.controls; let i=index;">
                <div [formGroupName]="i">
                    <label attr.for="{{'skill' + i}}">Skill</label>
                    <input id="{{'skill' + i}}" type="text" formControlName="skill">
                    <label>Level</label>
                    <input type="text" formControlName="level">
                </div>
              </div>
              <button type="submit">Save</button>
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
      details: [],
      activitySkills: this.fb.array([this.buildActivitySkill()])
    }, {updateOn: 'blur'});

    // on edit, when the data is retrieved, populate the skills would be like (on a specific callback of the httpGet:
/*
    this.activityForm.patchValue({
      title: this.activity.title;
      overview: this.activity.overview
    });
    this.activityForm.setControl('activitySkills',
    this.fb.array(activity.skills.map(item => this.buildActivitySkill(item.skill, item.level) || []));
*/
  }

  buildActivitySkill(): FormGroup {
    return this.fb.group({
      skill: '',
      level: ''
    });
  }

  save({value, valid}: { value: Activity, valid: boolean }) {
    console.log('Saving ?', value, valid);
    /*
        this.activityService.createActivity(this.activityForm.value).subscribe({
          next: data => console.log('saved and got', data),
          error: err => console.error('not saved because of error', err)
        });
    */
  }

  populate(e) {
    e.preventDefault();
    this.activityForm.patchValue({
      details: {
        title: 'Populated title',
        overview: 'peepeepoopoo'
      }
    });
  }

  addSkill(e) {
    e.preventDefault();
    this.activitySkills.push(this.buildActivitySkill());
  }
}
