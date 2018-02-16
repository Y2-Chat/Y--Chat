import { User } from './../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../../../services/cache.service';
import { MessagingSystemComponent } from '../messaging-system.component';

@Component({
  selector: 'app-message-type-navigator',
  templateUrl: './message-type-navigator.component.html',
  styleUrls: ['./message-type-navigator.component.css']
})
export class MessageTypeNavigatorComponent implements OnInit {

  users: User[];
  selected: string = "global";

  constructor(private messageSystem: MessagingSystemComponent) {
  }

  ngOnInit() {
  }

  switchTab(selected: string) {
    this.selected = selected;

    switch (selected) {
      case 'group':
        this.messageSystem.directMessage = false;
        this.messageSystem.globalChat = false;
        this.messageSystem.groupChat = true;
        break;
      case 'dm':
        this.messageSystem.directMessage = true;
        this.messageSystem.globalChat = false;
        this.messageSystem.groupChat = false;
        break;
      case 'global':
        this.messageSystem.directMessage = false;
        this.messageSystem.globalChat = true;
        this.messageSystem.groupChat = false;
        break;
    }
  }

}
