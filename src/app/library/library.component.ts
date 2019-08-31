import {Component, OnInit} from '@angular/core';

@Component({
  template: `
      <p>
          library works!
      </p>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
