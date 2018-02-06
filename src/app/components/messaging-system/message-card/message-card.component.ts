import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
@Input() message:Message;
@Input() user: User
  constructor() { }

  ngOnInit() {
  }

  profile(userId){
    alert(userId);
  }

}
