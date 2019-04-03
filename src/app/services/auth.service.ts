import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Création d'un nouvel Utilisateur
  // Méthode Asynchrone car elle peut mettre du temps (Wrapper)
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => { // tout se passe bien à la création de l'utilisateur ?
            resolve(); // On resolve la Promise
          },
          (error) => { // Si on récupère une erreur ?
            reject(error); // on reject avec l'erreur
          }
        );
      }
    );
  }

  // Connexion d'un Utilisateur
  singInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => { // tout se passe bien à la connexion de l'utilisateur ?
            resolve(); // On resolve la Promise
          },
          (error) => { // Si on récupère une erreur ?
            reject(error); // on reject avec l'erreur
          }
        );
      }
    );
  }

  // Déconnexion d'un utilisateur
  signOutUser() {
    firebase.auth().signOut();
  }
}
