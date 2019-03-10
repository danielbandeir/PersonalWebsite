import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { postBlog } from '../models/postBlog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent implements OnInit {

  addPost = new FormGroup({
    autor: new FormControl(''),
    categoria: new FormControl(''),
    data: new FormControl(''),
    nome: new FormControl(''),
    desc : new FormControl(''),
    text: new FormControl(''),
    foto1: new FormControl(''),
  });

  posts: AngularFirestoreCollection<postBlog>;
  postsBlog: Observable<postBlog[]>;

  constructor(private afs: AngularFirestore) { 
    this.posts = afs.collection<postBlog>('blog');
    this.postsBlog = this.posts.valueChanges();
  }

  ngOnInit() {
  }

  addItem(){
    this.posts.add(this.addPost.value);
    this.addPost.reset();
    alert("Postado com sucesso");
  }

}
