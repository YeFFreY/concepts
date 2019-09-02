import {TestBed} from '@angular/core/testing';

import {ActivityCategoryService} from './activity-category.service';

describe('ActivityCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityCategoryService = TestBed.get(ActivityCategoryService);
    expect(service).toBeTruthy();
  });
});
