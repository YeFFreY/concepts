import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivityService} from './activity.service';
import {Activity} from '../../../shared/interfaces';
import {DisplayModeEnum} from './DisplayModeEnum';
import {DataServiceError} from '../../../../lib/services.utils';

@Component({
  template: `
      <div>
          <h1>Activities</h1>

          <button (click)="changeDisplayMode(displayModeEnum.Grid)">Grid</button>
          <button (click)="changeDisplayMode(displayModeEnum.List)">List</button>

          <p>mode is {{displayMode}}</p>

          <app-activities-list
                  [activities]="activities"
                  [hidden]="displayMode !== displayModeEnum.List"></app-activities-list>

          <p [hidden]="displayMode !== displayModeEnum.Grid">No grid visualization done yet</p>
      </div>
  `,
  styleUrls: ['./activities-overview.component.scss']
})
export class ActivitiesOverviewComponent implements OnInit {
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  errorMessage: string;
  activities: Activity[] = [];

  constructor(private route: ActivatedRoute, private activityService: ActivityService) {}

  ngOnInit() {
    const display: string = this.route.snapshot.queryParamMap.get('display');
    this.changeDisplayMode(DisplayModeEnum[display]);

    this.activityService.getActivities().subscribe({
      next: (activities: Activity[]) => {
        this.activities = activities;
      },
      error: (err: DataServiceError) => this.errorMessage = err.friendlyMessage + ' ' + err.errorType
    });
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode || DisplayModeEnum.List;
  }
}
