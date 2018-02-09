import { User } from './../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-type-navigator',
  templateUrl: './message-type-navigator.component.html',
  styleUrls: ['./message-type-navigator.component.css']
})
export class MessageTypeNavigatorComponent implements OnInit {
  @Input() allUsers:User[];
  selected: string = "global";

  constructor() { }

  ngOnInit() {
  }

  switchTab(selected:string) {
    this.selected = selected;
  }

}
