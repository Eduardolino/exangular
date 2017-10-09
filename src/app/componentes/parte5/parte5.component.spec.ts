import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte5Component } from './parte5.component';

describe('Parte5Component', () => {
  let component: Parte5Component;
  let fixture: ComponentFixture<Parte5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
