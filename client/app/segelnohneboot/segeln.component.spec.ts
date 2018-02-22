/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SegelnComponent } from './segeln.component';

describe('GeschichteComponent', () => {
  let component: SegelnComponent;
  let fixture: ComponentFixture<SegelnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegelnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
