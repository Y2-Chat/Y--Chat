import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { DataService } from '../../../../core/data.service';
import { Chat } from '../../../../models/chat.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core';
import { group } from '@angular/core/src/animation/dsl';
import { CacheService } from '../../../../services/cache.service';
import { GroupChat } from '../../../../models/groupChat.model';

@Component({
  selector: 'app-group-chat-cards',
  templateUrl: './group-chat-cards.component.html',
  styleUrls: ['./group-chat-cards.component.css',
    '../../../../../assets/css/mainStyle.css']
})

export class GroupChatCardsComponent implements OnInit {

  groupChat = new Array<GroupChat>();
  userGroups = new Array<GroupChat>()
  currentUser = this.cache.user;

  constructor(
    protected cache: CacheService,
    private dataService: DataService) {
  }

  ngOnInit() {
    console.log('init', this.userGroups)
    this.filterGroups();
  }

  setChat(chat) {
    this.cache.currentGroupChat = chat;
    this.cache.groupSelected = true;
  }

  getGroupChatData() {
    return this.dataService.getCollection('group-chat')
      .map(response => {
        return this.groupChat = response as GroupChat[];
      }
      )
  }

  filterGroups() {


    this.getGroupChatData()
      .subscribe(response => {
        this.userGroups = new Array();
        for (let x of this.groupChat) {
          for (let i = 0; i < x.users.length; i++) {
            if (x.users[i] === this.cache.user.uid) {
              this.userGroups.push(x);
              break;
            }
          }
        }
      })
  }
}
