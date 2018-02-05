import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class DataService {

  constructor(private fireStore:AngularFirestore) { }


  //this.fireStore.collection('users', ref => ref.where('uid', '==', 'abc'))
  getData(collection:string,variable:string,operator:any,value:any){
    return this.fireStore.collection(collection, ref =>
      ref.where(variable,operator,value))
        .valueChanges().map(response=>{
          return response;
        });
  }

}
