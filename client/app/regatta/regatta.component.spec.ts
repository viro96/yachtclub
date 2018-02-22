/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegattaComponent } from './regatta.component';

describe('RegattaComponent', () => {
  let component: RegattaComponent;
  let fixture: ComponentFixture<RegattaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegattaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
