import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../shared/interfaces';

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
                  <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr *ngFor="let activity of activities">
                  <td>{{activity.id}}</td>
                  <td>{{activity.title}}</td>
                  <td>{{activity.overview}}</td>
                  <td><a [routerLink]="['/library/activities',activity.id]" [queryParams]="{display: 'list'}">Details</a></td>
              </tr>
              <tr *ngIf="!activities.length"><td colspan="3">No Records found.</td></tr>
              </tbody>
          </table>
      </div>
  `,
  styleUrls: ['./activities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesListComponent implements OnInit {
  @Input() activities: Activity[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
