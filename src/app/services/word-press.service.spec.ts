import { TestBed } from '@angular/core/testing';

import { WordPressService } from './word-press.service';

describe('WordPressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordPressService = TestBed.get(WordPressService);
    expect(service).toBeTruthy();
  });
});
