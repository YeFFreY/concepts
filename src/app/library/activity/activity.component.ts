import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
