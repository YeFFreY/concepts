import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
      <h1 class="bg-gray-400">Welcome to {{title}}!</h1>
      <nav class="bg-gray-200">
          <a [routerLink]="['/home']">Home</a>
          <a [routerLink]="['/library']">Library</a>
      </nav>
      <app-spinner></app-spinner>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concepts';
}
