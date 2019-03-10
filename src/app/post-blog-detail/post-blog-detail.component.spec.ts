import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlogDetailComponent } from './post-blog-detail.component';

describe('PostBlogDetailComponent', () => {
  let component: PostBlogDetailComponent;
  let fixture: ComponentFixture<PostBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
