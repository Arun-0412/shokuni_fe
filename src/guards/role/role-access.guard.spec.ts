import { TestBed, async, inject } from '@angular/core/testing';

import { RoleAccessGuard } from './role-access.guard';

describe('RoleAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleAccessGuard]
    });
  });

  it('should ...', inject([RoleAccessGuard], (guard: RoleAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
