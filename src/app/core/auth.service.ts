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
    console.log("Log in with google")
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {

    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {

        if (credential.additionalUserInfo.isNewUser) {
          this.updateUserData(credential.user);
          this.successNavigate();
        } else {
          this.successNavigate();
        }
      }).catch(error => {
        console.log(error.message);
      })
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      profilePic: user.photoURL,//Change to profile pic
      status: "Hi I'm using Y2-Chat",
      username: user.displayName,
      chatIds: new Array<string>()
    }

    console.log(data)
    return userRef.set(data);
  }
  //End Google Login

  //Start Login
  public fieldLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => {
        this.dataService.getData('users', 'uid', '==', success.uid).subscribe(response => {
          this.cacheService.user = response['0'];
          this.successNavigate();
        })
      }).catch(error => {
        console.log(error.message)
      })
  }
  
  //End Login
getCurrentUser() {
    return this.dataService.getData('users','uid','==',this.afAuth.auth.currentUser.uid);
  }
  //Start Register
  public registerUser(email: string, password: string, user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(success => {
        user.uid = this.afAuth.auth.currentUser.uid;
        this.registerToGlobal(user);
        this.dataService.pushData("users", this.afAuth.auth.currentUser.uid, user);

        this.successNavigate();
      }).catch(error => {
        if (error === "The email address is already in use by another account.") {
          alert(error.message)
        } else {
          console.log(error.message);
        }
      }
      )
  }
  //End Registeter

  //Navigate on success
  successNavigate() {
    this.router.navigate(["messaging"]);
  }

  registerToGlobal(user) {
    console.log("Regiser global")
    this.dataService.pushData("global-chat", "user", Object.assign({}, user.uid));
  }

logout(){
  this.afAuth.auth.signOut();
}

}