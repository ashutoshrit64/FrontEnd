import { TestBed } from '@angular/core/testing';

import { HttpNotesService } from './http-notes.service';

describe('HttpNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpNotesService = TestBed.get(HttpNotesService);
    expect(service).toBeTruthy();
  });
});
