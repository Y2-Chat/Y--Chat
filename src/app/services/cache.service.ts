import { Injectable } from "@angular/core";
import { User } from "../models/user.model";


@Injectable()
export class CacheService {

    user: User;

    constructor() {
        this.user = new User;
    }
}
