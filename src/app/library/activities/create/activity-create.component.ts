import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
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
              <button type="submit" [disabled]="!activityForm.valid">Save</button>
              <button (click)="populate($event)">Populate</button>
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

  constructor(private fb: FormBuilder, private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      overview: ''
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
}
