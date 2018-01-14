import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetJsComponentComponent } from './sheet-js-component.component';

describe('SheetJsComponentComponent', () => {
  let component: SheetJsComponentComponent;
  let fixture: ComponentFixture<SheetJsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetJsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetJsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
