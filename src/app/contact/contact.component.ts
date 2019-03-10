import { Component, OnInit } from '@angular/core';
import { postContact } from '../models/postContact';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    nome : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    telefone : new FormControl(''),
    empresa : new FormControl(''),
    texto : new FormControl('', Validators.required),
    visto : new FormControl(0),
  });

  contactCollection : AngularFirestoreCollection<postContact>;

  constructor(private afs : AngularFirestore) { 
    this.contactCollection = afs.collection<postContact>('contato');
  }

  ngOnInit() {
  }

  addItem(){
    this.contactCollection.add(this.contactForm.value);
    this.contactForm.reset();
  }

}
