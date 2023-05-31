import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutDetailComponent } from './cut-detail.component';

describe('CutDetailComponent', () => {
  let component: CutDetailComponent;
  let fixture: ComponentFixture<CutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
