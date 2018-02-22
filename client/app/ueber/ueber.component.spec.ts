/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UeberComponent } from './ueber.component';

describe('UeberComponent', () => {
  let component: UeberComponent;
  let fixture: ComponentFixture<UeberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
