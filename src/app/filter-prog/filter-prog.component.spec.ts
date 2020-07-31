import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProgComponent } from './filter-prog.component';

describe('FilterProgComponent', () => {
  let component: FilterProgComponent;
  let fixture: ComponentFixture<FilterProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
