import { DataService } from './../../core/data.service';
import { User } from './../../models/user.model';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging-system',
  templateUrl: './messaging-system.component.html',
  styleUrls: ['./messaging-system.component.css']
})
export class MessagingSystemComponent implements OnInit {

  constructor(private authServ: AuthService, private data: DataService) { }
  currentUser: User;
  users: User[];

  ngOnInit() {
    this.authServ.getCurrentUser().subscribe(user =>
      this.currentUser = user['0']
    );
    this.getUsers();
  }

  getUsers() {
    this.data.getCollection('users').subscribe(users => {
      // console.log(users[0]);
      this.users = users as User[];
      // console.log(this.users)
    })
  }

}
