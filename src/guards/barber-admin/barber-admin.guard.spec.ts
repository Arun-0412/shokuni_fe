import { TestBed, async, inject } from '@angular/core/testing';

import { BarberAdminGuard } from './barber-admin.guard';

describe('BarberAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarberAdminGuard]
    });
  });

  it('should ...', inject([BarberAdminGuard], (guard: BarberAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
