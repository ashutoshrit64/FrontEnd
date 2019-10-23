import { TestBed } from '@angular/core/testing';

import { HttpnoteService } from './httpnote.service';

describe('HttpnoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpnoteService = TestBed.get(HttpnoteService);
    expect(service).toBeTruthy();
  });
});
