import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredApplicationsComponent } from './stored-applications.component';

describe('StoredApplicationsComponent', () => {
  let component: StoredApplicationsComponent;
  let fixture: ComponentFixture<StoredApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
