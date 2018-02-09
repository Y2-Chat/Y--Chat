import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // dropDownVisibility: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // switchVisibilty(){
  //   if(this.dropDownVisibility === true){
  //     this.dropDownVisibility = false;
  //   } else if(this.dropDownVisibility===false){
  //     this.dropDownVisibility = true;
  //   }
  // }

}
