import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsCsPage } from './ts-cs.page';

describe('TsCsPage', () => {
  let component: TsCsPage;
  let fixture: ComponentFixture<TsCsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsCsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsCsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
