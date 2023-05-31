import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSalesComponent } from './search-sales.component';

describe('SearchSalesComponent', () => {
  let component: SearchSalesComponent;
  let fixture: ComponentFixture<SearchSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
