import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivitiesOverviewComponent} from './activities-overview.component';

describe('ActivitiesComponent', () => {
  let component: ActivitiesOverviewComponent;
  let fixture: ComponentFixture<ActivitiesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
