import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/switchMap';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  //Start Google Login
  user: Observable<User>;
  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {

    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })

    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        if (credential.uid !== null || credential.uid !== undefined) {

        } else {
          this.updateUserData(credential.user);
        }
      })
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      profilePic: user.photoURL,//Change to profile pic
      status: "user.status",
      username: user.displayName,
      chatIds: new Array<string>()
    }

    return userRef.set(data);
  }
  //End Google Login

}