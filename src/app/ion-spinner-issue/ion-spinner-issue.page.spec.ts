import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSpinnerIssuePage } from './ion-spinner-issue.page';

describe('IonSpinnerIssuePage', () => {
  let component: IonSpinnerIssuePage;
  let fixture: ComponentFixture<IonSpinnerIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSpinnerIssuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSpinnerIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
