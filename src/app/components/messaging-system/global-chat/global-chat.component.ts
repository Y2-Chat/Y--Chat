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

  ngOnInit() {
  }

}
