import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DataService } from '../../../core/data.service';
import { GroupChat } from '../../../models/groupChat.model';
import { Message } from '../../../models/message.model';
import { User } from '../../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css',
    '../../../../assets/css/mainStyle.css']
})
export class GroupChatComponent implements OnInit {
  @ViewChild('scroll') private scrollRef: ElementRef;
  newMessage: string;

  chatID: string;
  uids: any[]
  groupChat: Array<GroupChat> = new Array<GroupChat>();
  userGroups: Array<GroupChat> = new Array<GroupChat>();
  currentChat: GroupChat;
  currentUser = this.cache.user;

  constructor(
    private cache: CacheService,
    private dataService: DataService,
    private afs: AngularFirestore) {

    this.currentChat = this.cache.currentGroupChat;

    if (this.currentChat.chatId === undefined) {
      this.currentChat.chatId = '0';
    }
    if (this.currentChat.chatName === undefined) {
      this.currentChat.chatName = '0';
    }
    if (this.currentChat.messages === undefined) {
      this.currentChat.messages = [];
    }
    if (this.currentChat.users === undefined) {
      this.currentChat.users = [];
    }

    // if (this.currentChat === undefined) {
    //   // this.currentChat = {
    //   //   chatName: '',
    //   //   chatId: '',
    //   //   messages: [],
    //   //   users: []
    //   // }
    // } else {
    //   this.currentChat = this.cache.currentGroupChat;
    // }

    if (this.currentChat.messages === undefined) {
      this.currentChat.messages = [];
      this.scrollToBottom();
      this.filterGroups();
    } else {
      this.scrollToBottom();
      this.filterGroups();
    }
  }

  ngOnInit() {

  }

  getGroupChatData() {
    return this.dataService.getCollection('group-chat').map(
      response => {
        console.log('response:', response)
        return this.groupChat = response as GroupChat[];
      }
    )
  }

  filterGroups() {
    this.getGroupChatData().subscribe(response => {
      for (let x of this.groupChat) {
        for (let i = 0; i < x.users.length; i++) {
          if (x.users[i] === this.currentUser.uid) {
            this.userGroups.push(x);
          }
        }
      }
    })
  }

  sendMessage() {
    this.chatID = this.cache.currentGroupChat.chatId;

    let message: Message = {
      body: this.newMessage,
      senderUid: this.cache.user.uid,
      read: false,
      time: new Date(),
    }

    // if (this.currentChat.messages === undefined) {
    //   this.currentChat.messages = [];
    // }

    this.currentChat.messages.push(message)
    this.dataService.pushData('group-chat', this.chatID, this.currentChat);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  enter(event) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }

  scrollToBottom(): void {
    try {
      this.scrollRef.nativeElement.scrollTop = this.scrollRef.nativeElement.scrollHeight;
    } catch (err) {

    }
  }

}
