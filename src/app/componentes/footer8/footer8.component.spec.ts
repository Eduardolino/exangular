import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer8Component } from './footer8.component';

describe('Footer8Component', () => {
  let component: Footer8Component;
  let fixture: ComponentFixture<Footer8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
