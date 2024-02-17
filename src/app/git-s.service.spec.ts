import { TestBed } from '@angular/core/testing';

import { GitSService } from './git-s.service';

describe('GitSService', () => {
  let service: GitSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
