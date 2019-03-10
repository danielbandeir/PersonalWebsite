import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectDetailComponent } from './post-project-detail.component';

describe('PostProjectDetailComponent', () => {
  let component: PostProjectDetailComponent;
  let fixture: ComponentFixture<PostProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
