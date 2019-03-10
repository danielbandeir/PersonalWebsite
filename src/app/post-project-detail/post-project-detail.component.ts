import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { postProject } from '../models/postProject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-project-detail',
  templateUrl: './post-project-detail.component.html',
  styleUrls: ['./post-project-detail.component.css']
})
export class PostProjectDetailComponent implements OnInit {

  postCollection : AngularFirestoreDocument<postProject>;
  postDetail : Observable<postProject>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    let id2 = this.route.snapshot.paramMap.get('id');
    this.postCollection = this.afs.doc('projetos/'+id2);
    this.postDetail = this.postCollection.valueChanges();
  }

  ngOnInit() {
  }

}
