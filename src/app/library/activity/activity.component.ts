import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivityService} from './activity.service';
import {Activity} from '../../shared/interfaces';

@Component({
  template: `
      <div>
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

  constructor(private route: ActivatedRoute, private activityService: ActivityService) {}

  ngOnInit() {
    // stream of activity id to use when component would be reused through navigation
    this.route.paramMap.subscribe(params => this.getActivity(+params.get('id')));
    // snapshot when we are sure that component might not be reused between two navigate
    console.log('Got activity Id from snapshot: ', this.route.snapshot.paramMap.get('id'));
  }

  getActivity(id: number) {
    this.activityService.getActivity(id).subscribe({
      next: activity => {
        this.activity = activity;
      },
      error: err => this.errorMessage = err
    });
  }

}
