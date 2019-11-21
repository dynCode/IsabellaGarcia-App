import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsPage } from './specials.page';

describe('SpecialsPage', () => {
  let component: SpecialsPage;
  let fixture: ComponentFixture<SpecialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
