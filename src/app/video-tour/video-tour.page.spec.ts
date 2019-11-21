import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTourPage } from './video-tour.page';

describe('VideoTourPage', () => {
  let component: VideoTourPage;
  let fixture: ComponentFixture<VideoTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
