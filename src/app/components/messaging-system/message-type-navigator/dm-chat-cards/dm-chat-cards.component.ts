import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { CacheService } from '../../../../services/cache.service';

@Component({
  selector: 'app-dm-chat-cards',
  templateUrl: './dm-chat-cards.component.html',
  styleUrls: ['./dm-chat-cards.component.css']
})
export class DmChatCardsComponent implements OnInit {

  users: User[];

  constructor(private cache: CacheService) {
    this.users = this.cache.users;
  }

  ngOnInit() {

  }

}
