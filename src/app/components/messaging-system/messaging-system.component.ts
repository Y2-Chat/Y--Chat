import { User } from './../../models/user.model';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging-system',
  templateUrl: './messaging-system.component.html',
  styleUrls: ['./messaging-system.component.css']
})
export class MessagingSystemComponent implements OnInit {

  constructor(private authServ: AuthService) { }
currentUser:User;
  ngOnInit() {
    this.authServ.getCurrentUser().subscribe(user=>
      this.currentUser=user['0']
    );
  }

}
