import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class DataService {

  constructor(private fireStore:AngularFirestore , private afAuth: AngularFireAuth) { 
   setTimeout(()=>{
      this.userData()
   });  1000 }
 
  profilesCollection:AngularFirestoreCollection<User>;
  profiles:Observable<User[]>;
  users:User[] = [];


  //this.fireStore.collection('users', ref => ref.where('uid', '==', 'abc'))
  getData(collection: string, variable: string, operator: any, value: any, ) {
    return this.fireStore.collection(collection, ref =>
      ref.where(variable, operator, value))
      .valueChanges().map(response => {
        return response;
      });
  }

  getCollection(collection: string) {
    return this.fireStore.collection(collection)
      .valueChanges().map(response => {
        console.log(response)
        return response;
      });
  }

  pushData(collection: string, doc: any, data: any) {
    let collectionRef = this.fireStore.collection(collection);
    collectionRef.doc(doc)
      .set(Object.assign({}, data));
  }
  getProfile(uid:string):User{
    let user:User;
    for( let i = 0 ; i < this.users.length ; i++ ){
          user = this.users[i];
          console.log( user );
          if( user.uid === uid ) return user ; 
    }
  }

 userData(){
  this.profilesCollection = this.fireStore.collection('users');
  this.profiles = this.profilesCollection.valueChanges();
  this.profiles.subscribe(users=>{
   for( let i = 0 ; i < users.length ; i++ ){
       let user:User = users[i];
  this.users.push(user);
    }
  });
 }

}
