import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy8Component } from './lazy8.component';

describe('Lazy8Component', () => {
  let component: Lazy8Component;
  let fixture: ComponentFixture<Lazy8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
