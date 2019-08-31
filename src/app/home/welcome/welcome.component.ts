import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  template: `
      <p>
          welcome works!
      </p>
  `,
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
