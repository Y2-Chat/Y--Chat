import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit,ViewChild, ElementRef,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit,AfterViewChecked {
  @ViewChild('scroll') private scrollRef:ElementRef;


  constructor() { }

  messages: any[] = [
    {
      messageId: '1234',
      body: 'hello',
      senderUid: 'user1',
      read: false,
      time: new Date()
    },
    {
      messageId:'1234',
      body:'sup',
      senderUid:'user2',
      read:false,
      time: new Date()
    },
    {
      messageId:'1234',
      body:'how you been?',
      senderUid:'user1',
      read:false,
      time: new Date()
    },
    {
      messageId:'1234',
      body:'good and you:)',
      senderUid:'user2',
      read:false,
      time: new Date()
    }
  ]

  // message: Message = {
  //   messageId: '1234',
  //   body: 'hello world',
  //   senderUid: 'hey',
  //   read: false,
  //   time: new Date()
  // };

  user: User = {
    uid: "string",
    profilePic: "File",
    status: "string",
    username: "string",
    chatIds: ['global-chat']
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  scrollToBottom():void{
    try{
      this.scrollRef.nativeElement.scrollTop = this.scrollRef.nativeElement.scrollHeight;
    }catch(err){

    }
  }

}
