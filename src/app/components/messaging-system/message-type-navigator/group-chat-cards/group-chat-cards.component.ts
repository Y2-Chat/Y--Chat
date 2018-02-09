import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { DataService } from '../../../../core/data.service';
import { Chat } from '../../../../models/chat.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-group-chat-cards',
  templateUrl: './group-chat-cards.component.html',
  styleUrls: ['./group-chat-cards.component.css']
})
export class GroupChatCardsComponent implements OnInit {

  users: User[];
  group: Array<string>;
  chat: Chat;

  constructor(
    private dataService: DataService,
    private afs: AngularFirestore) {
    this.group = new Array<string>();

    this.chat = new Chat;
  }

  ngOnInit() {
    this.chat.chatId = '';
    this.chat.users = [];
    this.chat.messages = [];

    // Mock users for display purposes
    // this.users = [{
    //   uid: "",
    //   profilePic: null,
    //   status: "",
    //   username: "jannie",
    //   chatIds: null
    // }, {
    //   uid: "",
    //   profilePic: null,
    //   status: "",
    //   username: "sannie",
    //   chatIds: null
    // }, {
    //   uid: "",
    //   profilePic: null,
    //   status: "",
    //   username: "jenevive",
    //   chatIds: null
    // }]
    // Mock users for display purposes
  }

  createGroup() {
    this.dataService.addChat('chats', this.chat);

    const chat: Observable<any> = this.afs.collection('chats').snapshotChanges().map(actions => {
      return actions.map(response => {
        const uid = response.payload.doc.id;
        return uid;
      });
    });

    let flag = true;
    chat.subscribe(response => {
      response.map(element => {
        if (element.uid === this.chat.chatId && flag) {
        }
      });
    });
  }

  addMembersToGroup(user) {
    this.group.push(user.uid);
  }

}
