import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activity, ActivityResolved} from '../../../shared/interfaces';

@Component({
  template: `
      <div>
          <p>error ? {{errorMessage}}</p>
          <h1>
              {{ activity?.id}} - {{ activity?.title}}
          </h1>
          <router-outlet></router-outlet>
          <a [routerLink]="['/library/activities']" queryParamsHandling="preserve">Back</a>
      </div>
  `,
  styleUrls: ['./activity-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityDetailsComponent implements OnInit {
  activity: Activity;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // stream of activity id to use when component would be reused through navigation
    //   this.route.paramMap.subscribe(params => this.getActivity(+params.get('id')));
    // snapshot when we are sure that component might not be reused between two navigate
    //   console.log('Got activity Id from snapshot: ', this.route.snapshot.paramMap.get('id'));

    this.route.parent.data.subscribe(data => {
      const resolvedData: ActivityResolved = data.resolvedData;
      this.errorMessage = resolvedData.error;
      this.onActivityRetrieved(resolvedData.activity);
    });
  }

  private onActivityRetrieved(activity: Activity) {
    this.activity = activity;
  }
}
