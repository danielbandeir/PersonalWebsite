import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

export interface sendEmail{
  email : string;
}

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  addEmail = new FormGroup({
    email : new FormControl(''),
  });

  emailsCollection : AngularFirestoreCollection<sendEmail>;
  email : Observable<sendEmail[]>;

  constructor( private afs: AngularFirestore) { 
    this.emailsCollection = afs.collection<sendEmail>('noticias');
    this.email = this.emailsCollection.valueChanges();
   }

  ngOnInit() {
  }

  addEmailToDatabase(){
    this.emailsCollection.add(this.addEmail.value);
    alert("Obrigado "+this.addEmail.value.email+", irei enviar para você tudo que acontecer em meu site =D");
    this.addEmail.reset();
  }


}
