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

  users: User[];
  group: Array<string>;
  groupChat: GroupChat;

  constructor(
    private dataService: DataService,
    private afs: AngularFirestore,
    protected cache: CacheService) {

    this.group = new Array<string>();
    this.users = this.cache.users;
    this.groupChat = new GroupChat;


    this.users = this.cache.users;

    for (let x of this.users) {
      this.userMap[x.username] = false;
    }
  }

  ngOnInit() {
    this.groupChat.chatName = 'Unnamed';
    this.groupChat.chatId = '';
    this.groupChat.users = [];
    this.groupChat.messages = [];
  }

  //*ngif = add to groupd chat userMap[x.username] ? checked : unchecked


  checkUser(user: string) {
    this.userMap[user] = !this.userMap[user];
  }

  createGroup() {
    console.log("Create:")
    this.groupChat.users = this.group;
    this.dataService.addChat('chats', this.groupChat);

    const chat: Observable<any> = this.afs.collection('chats')
      .snapshotChanges()
      .map(actions => {
        return actions.map(response => {
          const uid = response.payload.doc.id;
          return uid;
        });
      });

    let flag = true;
    chat.subscribe(response => {
      response.map(element => {
        if (element.uid === this.groupChat.chatId && flag) {
        }
      });
    });
  }

  addMember(user) {
    console.log(user.uid);
    this.group.push(user.uid);
  }

  setGroupName() {
    this.groupChat.chatName = this.groupName;
    this.step = 2;
  }

}
