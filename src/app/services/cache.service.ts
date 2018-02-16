import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Chat } from "../models/chat.model";
import { GroupChat } from "../models/groupChat.model";


@Injectable()
export class CacheService {

    currentGroupChat: GroupChat;
    users: User[];
    user: User;
    senderId: string;
    groupChats: GroupChat[];
    groupSelected = false;

    constructor() {
        // this.users = new Array<User>();
        // this.groupChats = new Array<GroupChat>();
        // this.user = new User;
    }

    ngOninit() {

    }

    getUsers() {
        return this.users;
    }

    getGroupChats() {
        return this.groupChats;
    }
}
