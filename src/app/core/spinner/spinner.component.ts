import { Component, OnInit } from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div>
    <div *ngIf="running">
        <div aria-hidden="true"
             class="fixed top-0 left-0 w-full h-full overflow-hidden z-40 bg-gray-500 opacity-50"></div>
        <div aria-hidden="true"
             class="fixed top-0 left-0 w-full h-full overflow-hidden z-50 flex items-center justify-center pointer-events-none">
            <p class="text-gray-700 text-5xl"> Loading...</p>
        </div>
    </div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  running = false;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.isRunning().subscribe(value => this.running = value);
  }

  ngOnInit() {
  }

}
