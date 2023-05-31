import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteBarberComponent } from './invite-barber.component';

describe('InviteBarberComponent', () => {
  let component: InviteBarberComponent;
  let fixture: ComponentFixture<InviteBarberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteBarberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
