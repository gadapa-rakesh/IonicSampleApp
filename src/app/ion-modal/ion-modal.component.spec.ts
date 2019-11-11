import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonModalComponent } from './ion-modal.component';

describe('IonModalComponent', () => {
  let component: IonModalComponent;
  let fixture: ComponentFixture<IonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
