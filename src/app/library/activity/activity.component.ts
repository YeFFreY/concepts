import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
      <div>
          <h1>
              activity details
          </h1>
          <a [routerLink]="['/library/activities']" queryParamsHandling="preserve">Back</a>
      </div>
  `,
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // stream of activity id to use when component would be reused through navigation
    this.route.paramMap.subscribe(params => console.log('Got activity Id: ', params.get('id')));
    // snapshot when we are sure that component might not be reused between two navigate
    console.log('Got activity Id from snapshot: ', this.route.snapshot.paramMap.get('id'));
  }

}
