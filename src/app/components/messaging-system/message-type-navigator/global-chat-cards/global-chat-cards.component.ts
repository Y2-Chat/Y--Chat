import { Message } from './../../../../models/message.model';
import { User } from './../../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../../../../services/cache.service';

@Component({
  selector: 'app-global-chat-cards',
  templateUrl: './global-chat-cards.component.html',
  styleUrls: ['./global-chat-cards.component.css',
    '../../../../../assets/css/mainStyle.css']
})
export class GlobalChatCardsComponent implements OnInit {

  users: User[];

  constructor(
    protected cache: CacheService) {
    this.users = this.cache.users;
  }

  ngOnInit() {

  }
}
