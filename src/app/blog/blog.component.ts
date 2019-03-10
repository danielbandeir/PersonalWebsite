import { Component, OnInit } from '@angular/core';
import { PostBlogService } from './post-blog.service';
import { postBlog } from '../models/postBlog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts : postBlog[]

  constructor(public postBlogService : PostBlogService){ }

  ngOnInit() {
    this.postBlogService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
