/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllgemeinComponent } from './allgemein.component';

describe('AllgemeinComponent', () => {
  let component: AllgemeinComponent;
  let fixture: ComponentFixture<AllgemeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgemeinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllgemeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
