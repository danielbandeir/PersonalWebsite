import { TestBed } from '@angular/core/testing';

import { PostBlogService } from './post-blog.service';

describe('PostBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostBlogService = TestBed.get(PostBlogService);
    expect(service).toBeTruthy();
  });
});
