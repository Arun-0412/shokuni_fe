import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswrdComponent } from './reset-passwrd.component';

describe('ResetPasswrdComponent', () => {
  let component: ResetPasswrdComponent;
  let fixture: ComponentFixture<ResetPasswrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
