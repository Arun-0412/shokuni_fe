import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberJoinDiscussionComponent } from './barber-join-discussion.component';

describe('BarberJoinDiscussionComponent', () => {
  let component: BarberJoinDiscussionComponent;
  let fixture: ComponentFixture<BarberJoinDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberJoinDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberJoinDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
