import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSlidesPage } from './ion-slides.page';

describe('IonSlidesPage', () => {
  let component: IonSlidesPage;
  let fixture: ComponentFixture<IonSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
