import { Chat } from './../../../models/chat.model';
import { DataService } from './../../../core/data.service';
import { User } from './../../../models/user.model';
import { Message } from './../../../models/message.model';
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-global-chat',
  templateUrl: './global-chat.component.html',
  styleUrls: ['./global-chat.component.css']
})
export class GlobalChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroll') private scrollRef: ElementRef;
  @Input() currentUser: User
  newMessage: string;

  constructor(private data: DataService) { }

  uids: any[]
  globalChat:Chat;


  ngOnInit() {
    this.scrollToBottom();
    this.getGlobalChatData();
  }

  getGlobalChatData(){
    this.data.getCollection('global-chat').subscribe(
      response=>{
        this.globalChat = response['0'];
      }
    )
  }

  sendMessage() {
    let message: Message = {
      body: this.newMessage,
      senderUid: this.currentUser.uid,
      read: false,
      time: new Date(),
    }
    this.globalChat.messages.push(message)
    this.data.pushData('global-chat', 'chat', this.globalChat)
    this.newMessage = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  enter(event){
    if(event.keyCode == 13){
      console.log("enter was pressed")
      this.sendMessage();
    }
    
  }

  scrollToBottom(): void {
    try {
      this.scrollRef.nativeElement.scrollTop = this.scrollRef.nativeElement.scrollHeight;
    } catch (err) {

    }
  }

}
