import { DataService } from './../../../core/data.service';
import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
@Input() message:Message;
// @Input() user: User;
@Input() currentUserID:string;
sender:User;

  constructor(private dataServ:DataService) { }

  ngOnInit() {
    // console.log(this.message)
    this.dataServ.getData('users','uid','==',this.message.senderUid).subscribe(
      user=>this.sender=user['0']
    )
  }

  profile(userId){
    alert(userId);
  }

}
