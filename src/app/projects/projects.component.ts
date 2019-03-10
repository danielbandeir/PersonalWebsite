import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { postProject } from '../models/postProject';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsCollecion : AngularFirestoreCollection<postProject>;
  projects: Observable<postProject[]>;

  constructor( private afs: AngularFirestore) {
    this.projectsCollecion = afs.collection<postProject>('projetos');
    this.projects = this.projectsCollecion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as postProject;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

  ngOnInit() {
  }

  getProjects(){
    return this.projects;
  }

}
