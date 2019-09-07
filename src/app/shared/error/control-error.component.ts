import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  template: `
    <p class="text-red-500" [class.hidden]="_hide">
      {{_text}}
    </p>
  `,
  styles: []
})
export class ControlErrorComponent implements OnInit {
  _text: string;
  _hide = true;

  @Input() set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
