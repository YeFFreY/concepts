import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDetailsFormComponent {
  @Input() basicInfoForm: FormGroup;

}
