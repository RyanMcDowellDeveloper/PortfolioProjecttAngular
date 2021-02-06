import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtestComponent } from './materialtest.component';

describe('MaterialtestComponent', () => {
  let component: MaterialtestComponent;
  let fixture: ComponentFixture<MaterialtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
