import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { postBlog } from '../models/postBlog';
import { postProject } from '../models/postProject';
import { map } from 'rxjs/operators';
import * as $ from "jquery";




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  projectsList: any[];

  projects : AngularFirestoreCollection<postProject>;
  projectsDetail : Observable<postProject[]>;

  posts : AngularFirestoreCollection<postBlog>;
  postDetail : Observable<postBlog[]>;

  constructor(private afs : AngularFirestore) { 
    this.projects = afs.collection<postProject>('projetos', ref => ref.limit(6));
    this.projectsDetail = this.projects.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as postProject;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.posts = afs.collection<postBlog>('blog', ref => ref.orderBy('data', 'desc').limit(3));
    this.postDetail = this.posts.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as postBlog;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  ngOnInit() {
  }

}
