import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { postProject } from '../models/postProject';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-project-post',
  templateUrl: './add-project-post.component.html',
  styleUrls: ['./add-project-post.component.css']
})
export class AddProjectPostComponent implements OnInit {

  addProject = new FormGroup({
    nome: new FormControl(''),
    linguagem: new FormControl(''),
    url: new FormControl(''),
    sobre: new FormControl(''),
    objetivo: new FormControl(''),
    desafio: new FormControl(''),
    foto1: new FormControl(''),
    foto2: new FormControl(''),
    foto3: new FormControl(''),
  });

  projectCollection: AngularFirestoreCollection<postProject>;

  constructor(private afs: AngularFirestore) {
    this.projectCollection = afs.collection<postProject>('projetos');
   }

  ngOnInit() {
  }

  addItem(){
    this.projectCollection.add(this.addProject.value);
    this.addProject.reset();
    alert("Adicionado com sucesso");
  }

}
