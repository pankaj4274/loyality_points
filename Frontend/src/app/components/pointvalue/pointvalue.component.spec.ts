import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointvalueComponent } from './pointvalue.component';

describe('PointvalueComponent', () => {
  let component: PointvalueComponent;
  let fixture: ComponentFixture<PointvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
