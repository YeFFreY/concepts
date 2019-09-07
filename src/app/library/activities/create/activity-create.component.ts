import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Activity} from '../../../shared/interfaces';

@Component({
  selector: 'app-activity-create',
  template: `
      <div>
          <h1>New Activity</h1>
          <form novalidate (ngSubmit)="save(activityForm)" [formGroup]="activityForm">
              <app-activity-details-form formControlName="details"></app-activity-details-form>
              <app-activity-skills-form formControlName="activitySkills"></app-activity-skills-form>
              <button>Save</button>
              <button type="button" (click)="populate($event)">Populate</button>
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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.activityForm = this.fb.group({
      details: [],
      activitySkills: []
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
    this.activityForm.patchValue({
      details: {
        title: 'Populated title',
        overview: 'peepeepoopoo'
      }
    });
  }

}
