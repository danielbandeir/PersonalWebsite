import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { postBlog } from '../models/postBlog';

@Component({
  selector: 'app-post-blog-detail',
  templateUrl: './post-blog-detail.component.html',
  styleUrls: ['./post-blog-detail.component.css']
})
export class PostBlogDetailComponent implements OnInit {

  postsDoc : AngularFirestoreDocument<postBlog>;
  postDetail : Observable<postBlog>;

  constructor(private route: ActivatedRoute, private afs : AngularFirestore) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.postsDoc = afs.doc<postBlog>('blog/'+id);
    this.postDetail = this.postsDoc.valueChanges();
  }

  ngOnInit() {
    
  }



}
