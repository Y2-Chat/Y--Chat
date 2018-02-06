import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit {

  constructor() { }

  message:Message = {
    messageId:'1234',
    body:'hello world',
    senderUid:'hey',
    read:false,
    time: new Date()
  };

  user:User ={
    uid:"string",
    profilePic:"https://loremflickr.com/g/320/240/paris",
    status:"string",
    username:"string",
    chatIds:['global-chat']
  }

  ngOnInit() {
  }

}
