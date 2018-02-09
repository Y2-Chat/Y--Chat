import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-type-navigator',
  templateUrl: './message-type-navigator.component.html',
  styleUrls: ['./message-type-navigator.component.css']
})
export class MessageTypeNavigatorComponent implements OnInit {

  selected: string = "global";

  constructor() { }

  ngOnInit() {
  }

  switchTab(selected:string) {
    this.selected = selected;
  }

}
