import { Chat } from './../../../models/chat.model';
import { DataService } from './../../../core/data.service';
import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroll') private scrollRef: ElementRef;
  @Input() currentUser: User
  newMessage: string;

  constructor(private data: DataService) { }

  uids: any[]

  messages: Message[] = [];

  // globalChat:Chat = {
  //   chatId:'Y2-Chat-Global',
  //   messages:[]
    
  // };

  globalChat:Chat;

  // any[] = [
  //   {
  //     messageId: '1234',
  //     body: 'hello',
  //     senderUid: '9gnwRHMWevNL6tJOlFOMHrU0Vnl1',
  //     read: false,
  //     time: new Date()
  //   },
  //   {
  //     messageId:'1234',
  //     body:'sup',
  //     senderUid:'EuR2fX70PUXMM1GXAGR7TCLtKO42',
  //     read:false,
  //     time: new Date()
  //   },
  //   {
  //     messageId:'1234',
  //     body:'how you been?',
  //     senderUid:'9gnwRHMWevNL6tJOlFOMHrU0Vnl1',
  //     read:false,
  //     time: new Date()
  //   },
  //   {
  //     messageId:'1234',
  //     body:'good and you:)',
  //     senderUid:'EuR2fX70PUXMM1GXAGR7TCLtKO42',
  //     read:false,
  //     time: new Date()
  //   }
  // ]

  user: User = {
    uid: "string",
    profilePic: "File",
    status: "string",
    username: "string",
    chatIds: ['global-chat']
  }


  ngOnInit() {
    this.scrollToBottom();
    this.getGlobalChatData();
  }

  getGlobalChatData(){
    this.data.getCollection('global-chat').subscribe(
      response=>{
        console.log(response['0']);
        this.globalChat = response['0'];
        console.log(this.globalChat)
      }
    )
  }

  sendMessage() {
    let message: Message = {
      body: this.newMessage,
      senderUid: this.currentUser.uid,
      read: false,
      time: new Date(),
    }

    this.globalChat.messages.push(message)

    this.data.pushData('global-chat', 'chat', this.globalChat)
    console.log(message)
    // this.messages.push(message)
    this.newMessage = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollRef.nativeElement.scrollTop = this.scrollRef.nativeElement.scrollHeight;
    } catch (err) {

    }
  }

}
