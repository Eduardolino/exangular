import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte7Component } from './parte7.component';

describe('Parte7Component', () => {
  let component: Parte7Component;
  let fixture: ComponentFixture<Parte7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
