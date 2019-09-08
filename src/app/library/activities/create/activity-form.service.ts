import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Activity} from '../../../shared/interfaces';

@Injectable()
export class ActivityFormService {

  activityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.activityForm = this.fb.group({
      details: this.buildDetails(),
      skills: this.fb.array([])
    }, {updateOn: 'blur'});
  }

  getForm() {
    return this.activityForm;
  }

  useData(activity: Activity) {
    this.activityForm.patchValue({
      details: activity.details
    });
    this.getSkills().clear();
    for (const skill of activity.skills) {
      const group = this.addSkill();
      group.patchValue(skill);
    }
  }

  getDetails(): FormGroup {
    return this.activityForm.get('details') as FormGroup;
  }

  getSkills(): FormArray {
    console.log('skillls get !!');
    return this.activityForm.get('skills') as FormArray;
  }

  private buildDetails() {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      overview: ''
    }, {updateOn: 'blur'});
  }

  addSkill() {
    const g = this.fb.group({
      name: ['', Validators.required],
      description: ''
    });
    this.getSkills().push(g);
    return g;
  }

  removeSkill(index: number) {
    this.getSkills().removeAt(index);
  }
}
