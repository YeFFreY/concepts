import {Component} from '@angular/core';

@Component({
  template: `
      <h1>Activity Details</h1>
    <div class="bg-gray-800 text-white">
        <a [routerLink]="['details']" routerLinkActive="active">
            Details
        </a>
        <a [routerLink]="['edit']" routerLinkActive="active">
            Edit
        </a>
    </div>
    <div>
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
}
