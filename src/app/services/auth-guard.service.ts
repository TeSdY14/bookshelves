import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true); // L'utilisateur peut accéder à la route demandée
            } else { // l'Utilisateur ne peut accéder à la route demandée
              this.router.navigate(['/auth', 'signin']); // il est redirigé pour se connecter
              resolve(false);
            }
          });
      }
    );
  }
}
