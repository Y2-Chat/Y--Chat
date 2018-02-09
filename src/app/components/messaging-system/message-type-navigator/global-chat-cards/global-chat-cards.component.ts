import { Message } from './../../../../models/message.model';
import { User } from './../../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../../../../services/cache.service';

@Component({
  selector: 'app-global-chat-cards',
  templateUrl: './global-chat-cards.component.html',
  styleUrls: ['./global-chat-cards.component.css']
})
export class GlobalChatCardsComponent implements OnInit {
  users: User[];

  constructor(
    private cache: CacheService) {
    this.users = this.cache.users;
  }

  ngOnInit() {
  }

}
