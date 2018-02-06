import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit,Input } from '@angular/core';
import { ViewService } from '../../../core/env-set/view.service';



@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
@Input() message:Message;
@Input() user: User
  constructor( protected viewService:ViewService ) { }

  ngOnInit() {
  }

  profile(){
    this.viewService.setChatter( this.user );
    this.viewService.view( this.user.uid );
  }

}
