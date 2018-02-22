/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugendComponent } from './jugend.component';

describe('JugendComponent', () => {
  let component: JugendComponent;
  let fixture: ComponentFixture<JugendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
