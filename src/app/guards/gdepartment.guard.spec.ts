import { TestBed } from '@angular/core/testing';

import { departmentGuard } from './department.guard';

describe('GdepartmentGuard', () => {
  let guard: departmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(departmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
