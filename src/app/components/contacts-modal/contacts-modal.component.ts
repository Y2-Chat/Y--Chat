import { Input, Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { CacheService } from '../../services/cache.service';
import { GroupChat } from '../../models/groupChat.model';
import { DataService } from '../../core/data.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.css',
    '../../../assets/css/mainStyle.css']
})
export class ContactsModalComponent implements OnInit {

  step = 1;
  groupName = "";

  userMap: Map<String, Boolean> = new Map<String, Boolean>();
  flag = false;
  users: User[];
  group: Array<string>;
  groupChat: GroupChat = {
    chatId: "",
    chatName: "",
    messages: [],
    users: []
  };

  constructor(
    private dataService: DataService,
    private afs: AngularFirestore,
    protected cache: CacheService) {

    this.group = new Array<string>();
    this.users = this.cache.users;
    this.groupChat = new GroupChat;
  }

  ngOnInit() {
  }

  reset() {
    this.step = 1;
    this.groupName = '';
    this.group.splice(0)
    this.groupChat.chatName = 'Unnamed';
    this.groupChat.chatId = '';
    this.groupChat.users = [];
    this.groupChat.messages = [];

    for (let x of this.users) {
      this.userMap[x.username] = false;
    }
  }

  createGroup() {
    this.flag = true;

    this.fetchNewId().subscribe(response => {
      response.map(element => {
        console.log('element id', element)
        console.log('chatid', this.groupChat.chatId);
        console.log('flag2', this.flag)
        if (this.flag) {
          if ((element as string) === (this.groupChat.chatId as string)) {
            console.log('inside')
            console.log("Creating", this.groupChat);
            this.flag = false;
            console.log('flag3', this.flag)
            this.dataService.pushData('group-chat', this.groupChat.chatId, this.groupChat);
          }
        }

      });
    })
  }

  fetchNewId() {
    //Add group creator
    this.group.push(this.cache.user.uid);

    //Set all group users
    this.groupChat.users = this.group;

    //Push new group
    this.dataService.addChat('group-chat', this.groupChat);

    //Get UID
    const chat: Observable<any> = this.afs.collection('group-chat')
      .snapshotChanges()
      .map(actions => {
        return actions.map(response => {
          if (response.type === 'added' && this.flag === true) {
            this.flag = true;
            console.log('flag1', this.flag)
            const uid = response.payload.doc.id;
            this.groupChat.chatId = uid;
            this.cache.currentGroupChat.chatId = uid;
            return uid;
          }
        });
      });
    return chat;
  }

  addMember(user) {
    if (this.group.length < 1) {
      this.group.push(user.uid);
    } else {
      for (let i = 0; i < this.group.length; i++) {
        if (this.group[i] === user.uid) {
          this.group.splice(i, 1);
          break;
        }
        else if (i === (this.group.length - 1)) {
          this.group.push(user.uid);
          break;
        }
      }
    }
    this.userMap[user.username] = !this.userMap[user.username];
  }

  setGroupName() {
    this.groupChat.chatName = this.groupName;
    this.step = 2;
  }

}
