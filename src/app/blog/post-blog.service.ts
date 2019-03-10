import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { postBlog } from '../models/postBlog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  postBlogCollection: AngularFirestoreCollection<postBlog>;

  items: Observable<postBlog[]>;

  constructor(public afs: AngularFirestore) { 
    this.postBlogCollection = afs.collection<postBlog>('blog', ref => ref.orderBy("data", "desc"));
    this.items = this.postBlogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as postBlog;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getPosts(){
    return this.items;
  }

}
