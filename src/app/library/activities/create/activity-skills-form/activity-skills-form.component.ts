import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-activity-skills-form',
  template: `
      <div [formGroup]="skillGroup">
          <label>Skill</label>
          <input type="text" formControlName="name">
          <label>Level</label>
          <input type="text" formControlName="description">
          <button class="p-2 m-2 bg-red-500 text-white" type="button" (click)="removeSkill.emit()">X</button>
      </div>
  `,
  styleUrls: ['./activity-skills-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitySkillsFormComponent {
  @Input() skillGroup: FormGroup;
  @Output() removeSkill = new EventEmitter();

}
