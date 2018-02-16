import { Injectable } from "@angular/core";
import { User } from "../models/user.model";


@Injectable()
export class CacheService {

    users: User[];

    user: User;
    senderId: string;

    constructor() {
        this.user = new User;
    }

    ngOninit() {

    }

    getUsers(){
        return this.users;
    }
}
