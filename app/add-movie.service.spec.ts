import { TestBed } from '@angular/core/testing';

import { AddMovieService } from './add-movie.service';

describe('AddMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMovieService = TestBed.get(AddMovieService);
    expect(service).toBeTruthy();
  });
});
