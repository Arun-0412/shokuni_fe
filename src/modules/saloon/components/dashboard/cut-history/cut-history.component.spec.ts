import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutHistoryComponent } from './cut-history.component';

describe('CutHistoryComponent', () => {
  let component: CutHistoryComponent;
  let fixture: ComponentFixture<CutHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
