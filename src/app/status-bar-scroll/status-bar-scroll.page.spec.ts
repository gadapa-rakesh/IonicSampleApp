import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarScrollPage } from './status-bar-scroll.page';

describe('IonSlidesTwoPage', () => {
  let component: StatusBarScrollPage;
  let fixture: ComponentFixture<StatusBarScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
