import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgColumnComponent } from './svg-column.component';

describe('SvgColumnComponent', () => {
  let component: SvgColumnComponent;
  let fixture: ComponentFixture<SvgColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
