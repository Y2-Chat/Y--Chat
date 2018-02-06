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

  //Returns true when user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  //returns current data of user
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : "";
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //  this.isBusiness(user);
        this.router.navigate(["/main/dashboard"]);
      });
  }

  // googleLogin(): void {
  //   //validate login
  //   this.ahnAuth.auth
  //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //     .then(user => {
  //       this.isClient();
  //       this.setIsBusiness();
  //       this.router.navigate(["/main/dashboard"]);
  //     });
  //   //go to next page
  // }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/login"]);
  }

  // createUser(
  //   email: string,
  //   password: string,
  //   isBusinesses: boolean,
  // ) {
  //   let isError: boolean = false;
  //   this.afAuth.auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(success => {
  //       const user: User = {
  //         uid: success.uid,
  //         profilePic: user.photoURL,//Change to profile pic
  //         status: "user.status",
  //         username: user.displayName,
  //         chatIds: new Array<string>()
  //       };
  //       this._userService.addItem(user);
  //     })
  //     .catch(err => {
  //       isError = true;
  //       if (
  //         err.message ===
  //         "The email address is already in use by another account."
  //       ) {
  //         alert(err.message);
  //       } else {
  //         console.log(err.message);

  //       }
  //     });
  // }

  // verifyEmail() {
  //   this.afAuth.auth.currentUser
  //     .sendEmailVerification()
  //     .then(msg => alert("Password Successfully Reset"))
  //     .catch(msg => alert("Password Successfully Reset"));
  // }

  // resetPassword(email: string) {
  //   this.afAuth.auth
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       alert("Email to reset password was sent");
  //       this.router.navigate(["/login"]);
  //     }).catch(
  //     err => alert(err)
  //     )
  // }

  // isClient() {
  //   this._userService.users.subscribe((response: User[]) => {
  //     let found = false;
  //     for (var i = 0; i < response.length; i++) {
  //       if (response[i].id === this.afAuth.auth.currentUser.uid) {
  //         found = true;
  //         break;
  //       }
  //     }
  //     if (!found) {
  //       let user: User = {
  //         id: this.afAuth.auth.currentUser.uid,
  //         isBusiness: false
  //       };
  //       this._userService.addItem(user);
  //     }
  //   }
  //   )
  // }
}
