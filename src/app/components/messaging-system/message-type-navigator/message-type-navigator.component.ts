import { User } from './../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-message-type-navigator',
  templateUrl: './message-type-navigator.component.html',
  styleUrls: ['./message-type-navigator.component.css']
})
export class MessageTypeNavigatorComponent implements OnInit {
  users: User[];
  selected: string = "global";

  constructor() {
  }

  ngOnInit() {
  }

  switchTab(selected: string) {
    this.selected = selected;
  }

}
