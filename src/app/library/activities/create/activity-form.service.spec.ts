import {TestBed} from '@angular/core/testing';

import {ActivityFormService} from './activity-form.service';

describe('ActivityFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityFormService = TestBed.get(ActivityFormService);
    expect(service).toBeTruthy();
  });
});
