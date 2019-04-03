import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Initialize Firebase
  constructor() {
    var config = {
      apiKey: 'AIzaSyDSVx9fiU4pLO1Bx-wLJYKSfVVguHS1SAk',
      authDomain: 'bookshelves-e0ce7.firebaseapp.com',
      databaseURL: 'https://bookshelves-e0ce7.firebaseio.com',
      projectId: 'bookshelves-e0ce7',
      storageBucket: 'bookshelves-e0ce7.appspot.com',
      messagingSenderId: '595890652274'
    };
    firebase.initializeApp(config);
  }
}
