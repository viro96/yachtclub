/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegattenComponent } from './regatten.component';

describe('RegattenComponent', () => {
  let component: RegattenComponent;
  let fixture: ComponentFixture<RegattenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegattenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegattenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
