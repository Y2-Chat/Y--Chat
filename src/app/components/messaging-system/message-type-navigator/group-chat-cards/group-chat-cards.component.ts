import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { DataService } from '../../../../core/data.service';
import { Chat } from '../../../../models/chat.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';
import { group } from '@angular/core/src/animation/dsl';
import { CacheService } from '../../../../services/cache.service';

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
    private afs: AngularFirestore,
    private cache: CacheService) {

    this.group = new Array<string>();
    this.users = this.cache.users;
    this.chat = new Chat;
  }

  ngOnInit() {
    this.chat.chatId = '';
    this.chat.users = [];
    this.chat.messages = [];
  }

  createGroup() {
    console.log("Create:")
    this.chat.users = this.group;
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

  addMember(user) {
    console.log(user.uid);
    this.group.push(user.uid);
  }

}
