import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../../shared/interfaces';
import {DisplayModeEnum} from '../DisplayModeEnum';

@Component({
  selector: 'app-activities-list',
  template: `
      <div>
          <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Overview</th>
                  <th>Category</th>
                  <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr *ngFor="let activity of activities">
                  <td>{{activity.id}}</td>
                  <td>{{activity.details.title}}</td>
                  <td>{{activity.details.overview}}</td>
                  <td>{{activity.category?.name}}</td>
                  <td><a [routerLink]="['/library/activities',activity.id]" [queryParams]="{display: displayModeEnum.List}">Details</a></td>
              </tr>
              <tr *ngIf="!activities.length"><td colspan="5">No Records found.</td></tr>
              </tbody>
          </table>
      </div>
  `,
  styleUrls: ['./activities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesListComponent implements OnInit {
  @Input() activities: Activity[] = [];
  displayModeEnum = DisplayModeEnum;

  constructor() {
  }

  ngOnInit() {
  }

}
