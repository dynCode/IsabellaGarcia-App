import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardsPage } from './gift-cards.page';

describe('GiftCardsPage', () => {
  let component: GiftCardsPage;
  let fixture: ComponentFixture<GiftCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
