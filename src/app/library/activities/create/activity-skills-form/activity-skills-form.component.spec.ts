import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivitySkillsFormComponent} from './activity-skills-form.component';

describe('ActivitySkillsFormComponent', () => {
  let component: ActivitySkillsFormComponent;
  let fixture: ComponentFixture<ActivitySkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitySkillsFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
