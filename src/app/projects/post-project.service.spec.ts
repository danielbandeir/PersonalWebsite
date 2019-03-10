import { TestBed } from '@angular/core/testing';

import { PostProjectService } from './post-project.service';

describe('PostProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostProjectService = TestBed.get(PostProjectService);
    expect(service).toBeTruthy();
  });
});
