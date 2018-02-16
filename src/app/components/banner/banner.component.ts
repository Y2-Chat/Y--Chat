import { DataService } from './../../core/data.service';
import { ViewService } from './../../core/env-set/view.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // authService: AuthService
  dropDownVisibility: boolean = false;
  user: User;

  constructor(private authService: AuthService, private ViewService: ViewService) { }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
  }

  // switchVisibility(){
  //   if(this.dropDownVisibility === true){
  //     this.dropDownVisibility = false;
  //     console.log("method ran a");
  //   } else if(this.dropDownVisibility===false){
  //     this.dropDownVisibility = true;
  //     console.log("method ran b");
  //   }
  //   console.log("method ran");
  // }

  switchVisibilityOn() {
    this.dropDownVisibility = true;
    console.log("method ran b");
  }

  switchVisibilityOff() {
    this.dropDownVisibility = false;
    console.log("method ran a");
  }

  viewProfile() {

  }

}
