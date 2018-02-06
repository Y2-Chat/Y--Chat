import { Observable } from "rxjs/Rx";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
    usersRef: AngularFireList<any>;
    users: Observable<any[]>;

    checkUsers: User[];
    constructor(private db: AngularFireDatabase) {
        this.getUsers();
    }

    getUsers() {
        this.usersRef = this.db.list("clients");

        this.users = this.usersRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    addItem(user) {
        this.usersRef.push(user);
    }

    updateItem(key: string, user) {
        this.usersRef.update(key, user);
    }

    deleteItem(key: string) {
        this.usersRef.remove(key);
    }

    deleteEverything() {
        this.usersRef.remove();
    }
}