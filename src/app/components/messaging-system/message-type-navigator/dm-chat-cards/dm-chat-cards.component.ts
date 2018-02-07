import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-dm-chat-cards',
  templateUrl: './dm-chat-cards.component.html',
  styleUrls: ['./dm-chat-cards.component.css']
})
export class DmChatCardsComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    // Mock users for display purposes
    this.users = [{
      uid: "",
      profilePic: null,
      status: "",
      username: "jannie",
      chatIds: null
    }, {
      uid: "",
      profilePic: null,
      status: "",
      username: "sannie",
      chatIds: null
    }, {
      uid: "",
      profilePic: null,
      status: "",
      username: "jenevive",
      chatIds: null
    }]
    // Mock users for display purposes
  }

}
