import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonShortDetailComponent } from './saloon-short-detail.component';

describe('SaloonShortDetailComponent', () => {
  let component: SaloonShortDetailComponent;
  let fixture: ComponentFixture<SaloonShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
