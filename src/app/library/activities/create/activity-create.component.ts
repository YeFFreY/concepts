import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Activity} from '../../../shared/interfaces';
import {ActivityFormService} from './activity-form.service';

@Component({
  selector: 'app-activity-create',
  template: `
      <div>
          <h1>New Activity</h1>
          <form novalidate (ngSubmit)="save(activityForm)" [formGroup]="activityForm">
              <app-activity-details-form [basicInfoForm]="detailsForm"></app-activity-details-form>
              <div formArrayName="skills"
                   *ngFor="let activitySkill of skills.controls; let i=index;">
                  <app-activity-skills-form [skillGroup]="activitySkill" (removeSkill)="removeSkill(i)"></app-activity-skills-form>
              </div>
              <button>Save</button>
              <button type="button" (click)="populate($event)" class="m-2 p-2 bg-gray-200">Populate</button>
              <button type="button" (click)="addSkill()" class="m-2 p-2 bg-gray-200">Add Skill</button>
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
  detailsForm: FormGroup;
  skills: FormArray;

  constructor(private formService: ActivityFormService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.activityForm = this.formService.getForm();
    this.detailsForm = this.formService.getDetails();
    this.skills = this.formService.getSkills();
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
    this.formService.useData({
      details: {
        title: 'Populated title',
        overview: 'peepeepoopoo'
      },
      skills: [
        {name: 'Skill 1', description: 'bob'}
      ]
    });
  }

  addSkill() {
    this.formService.addSkill();
  }

  removeSkill(index) {
    this.formService.removeSkill(index);
  }

}
