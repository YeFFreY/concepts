import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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

      </div>
  `,
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  display = 'list';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setDisplay(this.route.snapshot.queryParamMap.get('display') || 'list');
  }

  setDisplay(mode: string) {
    this.display = mode;
  }
}
