import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";
import { postAbout } from '../models/postAbout';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    aboutCollecion : AngularFirestoreCollection<postAbout>;
    about: Observable<postAbout[]>;

  constructor( private afs : AngularFirestore) { 

    this.aboutCollecion = afs.collection<postAbout>('about');
    this.about = this.aboutCollecion.valueChanges();

  }

  ngOnInit() {

    var ctx = document.getElementById("chart");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      responsive: false,
      data: {
        labels: [
          'Python',
          'Html/CSS',
          'Javascript',
          'Java',
          'C/C++',
          'Actionscript',
          'Angular',
          'Django'
        ],
          datasets: [{
              data: ['80', '80', '50', '50', '30', '30', '50', '70'],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                  'rgba(255, 46, 0, 0.8)',
                  'rgba(9, 46, 32, 0.8)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 46, 0, 1)',
                  'rgba(9, 46, 32, 1)'
              ],
              borderWidth: 0.5,
          }],
      },
      options: {
         legend: {
             labels: {
                 // This more specific font property overrides the global property
                 fontColor: 'white',
                 fontSize: 20
             }
         }
     }
  });

  }

}
