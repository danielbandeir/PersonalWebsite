import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectPostComponent } from './add-project-post.component';

describe('AddProjectPostComponent', () => {
  let component: AddProjectPostComponent;
  let fixture: ComponentFixture<AddProjectPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
