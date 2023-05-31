import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaloonsComponent } from './add-saloons.component';

describe('AddSaloonsComponent', () => {
  let component: AddSaloonsComponent;
  let fixture: ComponentFixture<AddSaloonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaloonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
