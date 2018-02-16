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

  constructor(
    protected cache: CacheService,
    private dataService: DataService,
    private afs: AngularFirestore) {

    if (this.cache.currentGroupChat === undefined) {
      this.cache.currentGroupChat = {
        chatName: '',
        chatId: '',
        messages: [],
        users: []
      }
    }

    if (this.cache.currentGroupChat.chatId === undefined) {
      this.cache.currentGroupChat.chatId = '0';
    }
    if (this.cache.currentGroupChat.chatName === undefined) {
      this.cache.currentGroupChat.chatName = '0';
    }
    if (this.cache.currentGroupChat.messages === undefined) {
      this.cache.currentGroupChat.messages = [];
    }
    if (this.cache.currentGroupChat.users === undefined) {
      this.cache.currentGroupChat.users = [];
    }

    if (this.cache.currentGroupChat.messages === undefined) {
      this.cache.currentGroupChat.messages = [];
      this.scrollToBottom();
    } else {
      this.scrollToBottom();
    }
  }

  ngOnInit() {

  }

  sendMessage() {
    this.chatID = this.cache.currentGroupChat.chatId;

    let message: Message = {
      body: this.newMessage,
      senderUid: this.cache.user.uid,
      read: false,
      time: new Date(),
    }

    this.cache.currentGroupChat.messages.push(message);
    this.dataService.pushData('group-chat', this.chatID, this.cache.currentGroupChat);
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
