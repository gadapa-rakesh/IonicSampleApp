import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonModalIssuePage } from './ion-modal-issue.page';

describe('IonModalIssuePage', () => {
  let component: IonModalIssuePage;
  let fixture: ComponentFixture<IonModalIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonModalIssuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonModalIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
