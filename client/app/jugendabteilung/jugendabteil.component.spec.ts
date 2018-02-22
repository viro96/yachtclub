/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugendabteilungComponent } from './jugendabteil.component';

describe('JugendabteilungComponent', () => {
  let component: JugendabteilungComponent;
  let fixture: ComponentFixture<JugendabteilungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugendabteilungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugendabteilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
