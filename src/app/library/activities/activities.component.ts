import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivityService} from './activity.service';

@Component({
  template: `
      <div>
          <h1>Activities</h1>
          <button (click)="setDisplay('grid')">Grid</button>
          <button (click)="setDisplay('list')">List</button>
          <p>mode is {{display}}</p>

          <a [routerLink]="['/library/activities',1]"
             [queryParams]="{display: display}">activity details 1</a>
          <a [routerLink]="['/library/activities',2]"
             [queryParams]="{display: display}">activity details 2</a>

          {{activities.length}}
      </div>
  `,
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  display = 'list';
  errorMessage: string;
  activities: any[] = [];

  constructor(private route: ActivatedRoute, private activityService: ActivityService) {
    console.log(this.activityService);
  }

  ngOnInit() {
    this.setDisplay(this.route.snapshot.queryParamMap.get('display') || 'list');

    this.activityService.getActivities().subscribe({
      next: activities => {
        this.activities = activities;
      },
      error: err => this.errorMessage = err
    });
  }

  setDisplay(mode: string) {
    this.display = mode;
  }
}
