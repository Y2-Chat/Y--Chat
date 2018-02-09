import { Input, Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.component.html',
  styleUrls: ['./contacts-modal.component.css']
})
export class ContactsModalComponent implements OnInit {

  users: User[];

  userMap: Map<String, Boolean> = new Map<String, Boolean>();

  constructor(private cache: CacheService) {

    this.users = this.cache.users;

    for (let x of this.users) {
      this.userMap[x.username] = false;
    }

    //*ngif = add to groupd chat userMap[x.username] ? checked : unchecked
  }

  ngOnInit() {
  }

  checkUser(user: string) {
    this.userMap[user] = !this.userMap[user];
  }

}
