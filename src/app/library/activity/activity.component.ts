import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activity, ActivityResolved} from '../../shared/interfaces';

@Component({
  template: `
      <div>
          <p>error ? {{errorMessage}}</p>
          <h1>
              {{ activity?.id}} - {{ activity?.title}}
          </h1>
          <a [routerLink]="['/library/activities']" queryParamsHandling="preserve">Back</a>
      </div>
  `,
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activity: Activity;
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // stream of activity id to use when component would be reused through navigation
    //   this.route.paramMap.subscribe(params => this.getActivity(+params.get('id')));
    // snapshot when we are sure that component might not be reused between two navigate
    //   console.log('Got activity Id from snapshot: ', this.route.snapshot.paramMap.get('id'));

    const resolvedData: ActivityResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onActivityRetrieved(resolvedData.activity);
  }

  private onActivityRetrieved(activity: Activity) {
    this.activity = activity;
  }
}
