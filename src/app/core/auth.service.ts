import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/switchMap';

import { User } from '../models/user.model';
import { CacheService } from '../services/cache.service';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { DataService } from './data.service';

@Injectable()
export class AuthService {

  //Start Google Login
  user: Observable<User>;
  collectionRef = this.afs.collection("users");

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private cacheService: CacheService,
    private dataService: DataService) {

    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
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

  public fieldLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => {
        this.dataService.getData('users', 'uid', '==', success.uid).subscribe(response => {
          this.cacheService.user = response['0'];
          console.log(response['0']);
        })
        // this.cacheService.user = this.getCurrentUser;
      })
  }

  getCurrentUser() {
    return this.collectionRef.doc(this.afAuth.auth.currentUser.uid).valueChanges();
  }


  public registerUser(email: string, password: string, user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(success => {
        this.addItem(user)
      }).catch(error => {
        console.log("Error");
      }
      )
  }

  addItem(user) {
    user.uid = this.afAuth.auth.currentUser.uid;
    this.collectionRef.doc(this.afAuth.auth.currentUser.uid)
      .set(Object.assign({}, user));
  }

}