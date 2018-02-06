import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class DataService {

  constructor(private afAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private afs: AngularFirestore) { }


  //this.fireStore.collection('users', ref => ref.where('uid', '==', 'abc'))
  getData(collection: string, variable: string, operator: any, value: any) {
    return this.fireStore.collection(collection, ref =>
      ref.where(variable, operator, value))
      .valueChanges().map(response => {
        return response;
      });
  }

  pushData(collection: string, doc: any, data: any) {
    let collectionRef = this.afs.collection(collection);

    collectionRef.doc(doc)
      .set(Object.assign({}, data));
  }

}
