import { Message } from './../../../../models/message.model';
import { User } from './../../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-chat-cards',
  templateUrl: './global-chat-cards.component.html',
  styleUrls: ['./global-chat-cards.component.css']
})
export class GlobalChatCardsComponent implements OnInit {
  @Input() users:User[];
  // users: User[];
  

  constructor() { }

  ngOnInit() {
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

}
