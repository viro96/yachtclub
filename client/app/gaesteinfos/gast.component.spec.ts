/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastComponent } from './gast.component';

describe('GastComponent', () => {
  let component: GastComponent;
  let fixture: ComponentFixture<GastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
