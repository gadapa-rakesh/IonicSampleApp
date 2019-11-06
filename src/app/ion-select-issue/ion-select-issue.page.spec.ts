import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSelectIssuePage } from './ion-select-issue.page';

describe('IonSelectIssuePage', () => {
  let component: IonSelectIssuePage;
  let fixture: ComponentFixture<IonSelectIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSelectIssuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSelectIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
