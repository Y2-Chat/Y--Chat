import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { DataService } from '../../../../core/data.service';
import { Chat } from '../../../../models/chat.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';
import { group } from '@angular/core/src/animation/dsl';
import { CacheService } from '../../../../services/cache.service';
import { GroupChat } from '../../../../models/groupChat.model';

@Component({
  selector: 'app-group-chat-cards',
  templateUrl: './group-chat-cards.component.html',
  styleUrls: ['./group-chat-cards.component.css']
})

export class GroupChatCardsComponent implements OnInit {

  group: Array<string>;
  groupChat: GroupChat;

  constructor(protected cache: CacheService) {
    this.groupChat = new GroupChat;
  }

  ngOnInit() {
  }

  setChat(chat) {
    this.cache.currentGroupChat = chat;
    console.log('set to:', chat);
    console.log('chat is:', this.cache.currentGroupChat);
  }
}
